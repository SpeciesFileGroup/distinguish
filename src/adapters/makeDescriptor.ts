import {
  IDescriptorQualitative,
  IDescriptorContinuous,
  IDescriptorPresenceAbsence,
  IDescriptorSample
} from "../interfaces"
import { Descriptor } from "../types"
import { makeCharacterState } from './index';

import DescriptorTypes from '../constants/DescriptorTypes'


const makeBaseDescriptor = (data: any): Descriptor => ({
  descriptorId: data.id,
  name: data.name,
  description: data.description,
  position: data.position,
  status: data.status,
  type: data.type,
  depictionIds: data.depiction_ids,
  usefulness: data.usefulness,
  weight: data.weight
})

const makeDescriptorContinuos = (data: any): IDescriptorContinuous => ({
  ...makeBaseDescriptor(data),
  defaultUnit: data.default_unit,
  max: data.max,
  min: data.min
})

const makeDescriptorSample = (data: any): IDescriptorSample => ({
  ...makeBaseDescriptor(data),
  defaultUnit: data.default_unit,
  max: data.max,
  min: data.min
})

const makeDescriptorPresenceAbsence = (data: any): IDescriptorPresenceAbsence => ({
  ...makeBaseDescriptor(data),
  presence: data.precense
})

const makeDescriptorQualitative = (data: any): IDescriptorQualitative => ({
  ...makeBaseDescriptor(data),
  characterStates: data.states.map((item: any) => makeCharacterState(item))
})

export const makeDescriptor = (data: any): Descriptor => {

  switch (data.type) {
    case DescriptorTypes.Continuous:
      return makeDescriptorContinuos(data)
    case DescriptorTypes.Sample:
      return makeDescriptorSample(data)
    case DescriptorTypes.PresenceAbsence:
      return makeDescriptorPresenceAbsence(data)
    case DescriptorTypes.Qualitative:
      return makeDescriptorQualitative(data)
    default:
      return makeBaseDescriptor(data)
  }
}