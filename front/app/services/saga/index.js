import { put } from 'redux-saga/effects';

/*
export const callApi = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
*/
function* callApi(url, requestFunction, requestBody, callbackAction) {
  try {
    let response;
    if (requestBody) {
      response = yield requestFunction(url, {
        body: requestBody,
      });
      
    } else {
      response = yield requestFunction(url);
    }
    if (response && response !== null && response !== undefined) {
      const formattedData = response;
      if (callbackAction) {
        yield put(callbackAction(formattedData));
      }
    }
  } catch (e) {
    console.log(e);
  }
}
export { callApi };
