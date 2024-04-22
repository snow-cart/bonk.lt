import React from 'react';

import db from '../data/articles.json';

function Content() {

    let articleIndexes = [0, 1];

    function loadSpecificarticles(inputArr) {
        let articleArr = [];
        for (let index = 0; index < inputArr.length; index++) {
            articleArr[index] = (
                <div className='flex flex-col rounded-xl border-slate-800 border-2 p-1 ml-2 mr-2 mt-3'>
                    <div classname= "rounded-xl border-slate-800 border-2 bg-slate-800">{db[inputArr[index]].title}</div>
                    <div>{db[inputArr[index]].author}</div>
                    <div>{db[inputArr[index]].content}</div>
                </div>
            )
            console.log(inputArr[index]);
        }
        console.log(articleArr)
        return (
            <div className='flex'>
                {articleArr}
            </div>
        );
    }

    return (
        <div className='flex'>
            {loadSpecificarticles(articleIndexes)}
        </div>
    )
}



export default Content