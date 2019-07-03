import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { Plant } from '../models/Plant';
export interface PlantsState {
    plants: Plant[]
    , activePlant?: Plant
    
}

// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestPlantsAction {
    type: 'REQUEST_PLANTS';
}
interface ReceivePlantsAction {
    type: 'RECEIVE_PLANTS';
    plants: Plant[];
}

interface AddPlantRequestAction {
    type: 'ADD_PLANT_REQUEST';
    name: string;
    location: string;
}

interface AddPlantResponseAction {
    type: 'ADD_PLANT_RESPONSE';
    plant: Plant;
}

interface UpdatePlantRequestAction {
    type: 'UPDATE_PLANT_REQUEST';
    plant: Plant;
}

interface UpdatePlantResponseAction {
    type: 'UPDATE_PLANT_RESPONSE';
    plant: Plant;
}

type KnownAction = RequestPlantsAction | ReceivePlantsAction | AddPlantRequestAction | AddPlantResponseAction | UpdatePlantRequestAction | UpdatePlantResponseAction;

export const actionCreators = {
    requestPlants: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        
        let fetchTask = fetch(`api/Plants/GetPlants`)
            .then(response => response.json() as Promise<Plant[]>)
            .then(data => {
                dispatch({ type: 'RECEIVE_PLANTS', plants: data });
            });

        addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
        dispatch({ type: 'REQUEST_PLANTS'});
        
    }
};