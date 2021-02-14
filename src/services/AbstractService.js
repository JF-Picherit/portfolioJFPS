export default class AbstractService {
  constructor() {
    if (this.constructor === AbstractService) {
      throw new TypeError(
        'Abstract class "AbstractService" cannot be instantiated directly'
      );
    }
  }

  getFakeRequest(fakeResponse) {
    return new Promise(function(resolve) {
      setTimeout(() => resolve(fakeResponse), (Math.floor(Math.random() * 500)));
    });
  }

  doRequest(fakeResponse, onSuccess, onFail, onDone) {
    this.getFakeRequest(fakeResponse)
      .then(response => {
        onSuccess(response);
      })
      .catch(error => {
        console.error(error);
        onFail("An errored occured, please try again later.");
      })
      .finally(() => {
        if(onDone != null && onDone !== undefined)
          onDone()
      });
  }
}
