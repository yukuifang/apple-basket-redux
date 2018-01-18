
//这是名空间，对普通action做划分
const prefix = 'apple/';

let actions = {

    //注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    pickApple: () => (dispatch, getState) => {

        //如果正在摘苹果，则结束这个thunk, 不执行摘苹果
        if(getState().isPicking)
            return;

        //通知开始摘苹果
        dispatch(actions.beginPickApple());


        //发送摘苹果请求
        fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            .then(res => {
                if (res.status != 200) {
                    dispatch(actions.failPickApple(res.statusText));
                }else {
                    /** 备注这里的url只是测试用的，这个是之前hackernews的api, 这里只是确保接口是通的，至于数据还是自己mock */
                    let weight = Math.floor(200 + Math.random() * 50);
                    dispatch(actions.donePickApple(weight));
                }



            })
            .catch(e => {
                dispatch(actions.failPickApple(e.statusText));
        });

    },

    beginPickApple: () => ({
        type: 'apple/BEGIN_PICK_APPLE'
    }),

    donePickApple: appleWeight => ({
        type: 'apple/DONE_PICK_APPLE',
        payload: appleWeight
    }),

    failPickApple: errMsg => ({
        type: 'apple/FAIL_PICK_APPLE',
        payload: new Error(errMsg),
        error: true
    }),

    eatApple: appleId => ({
        type: 'apple/EAT_APPLE',
        payload: appleId
    })

};

export default actions;
