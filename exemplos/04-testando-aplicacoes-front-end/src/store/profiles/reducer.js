import {
  LOAD_PROFILES_PENDING,
  LOAD_PROFILES_SUCCESS,
  DELETE_PROFILE_PENDING,
  DELETE_PROFILE_SUCCESS,
  EDITING_USER_PROFILE,
  EDITING_USER_PROFILE_CANCEL,
  UPDATE_USER_PROFILE_SUCCESS,
  LOADING_STATUS
} from './actions';


// State ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const INITIAL_STATE = {
  status: null,
  profiles: [],
  editing: {
  },
};

// Reducer ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case LOAD_PROFILES_PENDING:
      return {
        ...state,
        status: LOADING_STATUS.LOADING
      }

    case LOAD_PROFILES_SUCCESS: {
      return {
        ...state,
        status: LOADING_STATUS.LOADED,
        profiles: payload
      }
    }

    case DELETE_PROFILE_PENDING: {
      return {
        ...state,
        status: LOADING_STATUS.LOADING,
      }
    }

    case DELETE_PROFILE_SUCCESS: {
      return {
        ...state,
        status: LOADING_STATUS.LOADED,
        profiles: state.profiles.filter(user => user.uid !== payload)
      }
    }

    case EDITING_USER_PROFILE:
      return {
        ...state,
        editing: {
          uid: payload,
          information: state.profiles.find(profile => profile.uid === payload)
        }
      }

    case EDITING_USER_PROFILE_CANCEL:
      return {
        ...state,
        editing: {}
      }

    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        editing: {},
        profiles: state.profiles.map(profile => profile.uid === payload.uid ? ({ ...profile, ...payload.information }) : profile)
      }

    default:
      return state;
  }
}

export default reducer;