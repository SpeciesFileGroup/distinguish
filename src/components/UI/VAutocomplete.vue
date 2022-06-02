<template>
  <div class="vue-autocomplete">
    <input
      ref="autocompleteInput"
      v-model="autocompleteValue"
      class="vue-autocomplete-input normal-input"
      type="text"
      autocomplete="off"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :disabled="disabled"
      :class="{
        'ui-autocomplete-loading' : state.isSearching, 
        'vue-autocomplete-input-search' : !state.isSearching 
      }"
      @input="updateTimeout"
      @keydown.down="downKey"
      @keydown.up="upKey"
      @keydown.enter="enterKey"
    >
    <ul 
      v-if="autocompleteValue && list.length"
      class="vue-autocomplete-list"
    >
      <li
        v-for="(item, index) in renderList"
        :key="item.id"
        class="vue-autocomplete-item"
        :class="{ active: state.currentIndex === index }"
        @mouseover="setCurrentIndex(index)"
        @click.prevent="selectItem(index)"
        v-html="item[props.queryString]"
      />
      <li v-if="state.list.length >= 20">
        Results may be truncated
      </li>
    </ul>
    <ul
      v-if="autocompleteValue && !state.isSearching && !state.list.length"
      class="vue-autocomplete-empty-list"
    >
      <li>--None--</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, reactive, computed } from 'vue'
import makeRequest from '@/utils/makeRequest'

interface Props {
  autofocus?: boolean
  disabled?: boolean
  label: string,
  limit: number,
  min: number,
  params?: object,
  placeholder: string,
  queryString: string,
  time: number
  url: string
}

interface Record {
  [key: string]: string | number
}

interface State {
  isSearching: boolean,
  list: [],
  currentIndex: number,
  requestId: string,
  timeoutRequest: ReturnType<typeof setTimeout> | undefined
}

const props = withDefaults(defineProps<Props>(), {
  min: 1,
  limit: 0,
  time: 500,
  placeholder: '',
  params: () => ({})
})

const emit = defineEmits([
  'select',
  'found',
])

const autocompleteInput = ref<HTMLInputElement>()
const list = ref<Array<object>>([])
const autocompleteValue = ref<string>('')
const requestId: string = Math.random().toString(36).substr(2, 5)


onMounted(() => {
  if (props.autofocus && autocompleteInput.value) {
    autocompleteInput.value.focus()
  }
})

const state = reactive<State>({
  isSearching: false,
  list: [],
  currentIndex: -1,
  requestId: Math.random().toString(36).substr(2, 5),
  timeoutRequest: undefined
})

const renderList = computed<Array<Record>>(() => state.list.slice(0, props.limit))

watch(
  autocompleteValue,
  newVal => {
    if (newVal.length < Number(props.min)) {
      state.list = []
    }
  }
)

const selectItem = (index: number) => {
  emit('select', state.list[index])
  autocompleteValue.value = ''
}


const setCurrentIndex = (index: number) => {
  state.currentIndex = index
}

const updateTimeout = () => {
  state.currentIndex = -1
  state.isSearching = false

  clearTimeout(state.timeoutRequest)

  state.timeoutRequest = setTimeout(() => {
    requestRecords()
  }, props.time)
}

const requestRecords = async () => {
  if (autocompleteValue.value.length < Number(props.min)) return

  state.list = []
  state.isSearching = true

  const { data } = await makeRequest.get(props.url, { params: props.params })

  state.list = data
  state.isSearching = false
}


const downKey = () => {
  if (state.currentIndex < state.list.length) {
    state.currentIndex++
  }
}

const upKey = () => {
  if (state.currentIndex > 0) {
    state.currentIndex--
  }
}

const enterKey = () => {
  if (state.currentIndex > -1 && state.currentIndex < state.list.length) {
    selectItem(state.currentIndex)
  }
}

</script>