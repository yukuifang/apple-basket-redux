import { fromJS } from 'immutable';  //为什么immutable 没写入package.json 好奇怪

const initialState = {
    isPicking: false,
    newAppleId: 3,
    apples: [
        {
            id: 0,
            weight: 100,
            isEaten: false
        },
        {
            id: 1,
            weight: 101,
            isEaten: true
        },
        {
            id: 2,
            weight: 102,
            isEaten: false
        }
    ]
};


export default (current_State = initialState, action) => {

    let newState = {};

    switch (action.type) {

        case 'apple/BEGIN_PICK_APPLE':

            /** 将isPicking设置true */
            newState = fromJS(current_State).set('isPicking', true).toJS();
            return newState;

        case 'apple/DONE_PICK_APPLE':

            let newApple =  {
                id: current_State.newAppleId,
                weight: action.payload,
                isEaten: false
            };

            /** 在apples中新增一个newApple， 将newAppleId增加1， 将isPicking设为false*/
            newState =  fromJS(current_State).update('apples', list => list.push(newApple))
                .set('newAppleId', current_State.newAppleId + 1)
                .set('isPicking', false)
                .toJS();
            return newState;

        case 'apple/FAIL_PICK_APPLE':

            /** 将isPicking设置false */
            newState =  fromJS(current_State).set('isPicking', false).toJS();
            return newState;

        case 'apple/EAT_APPLE':

            /** 将id对应索引值的数组的isEaten设为true,表示已吃*/
            newState = fromJS(current_State).setIn(['apples', action.payload, 'isEaten'], true).toJS()
            return newState;

        default:
             newState = current_State
             return newState;
    }

};
