import React from 'react';
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';


const App = ()=>{
    return(
    <div className="ui container comments">

        <ApprovalCard>
            <div>
                <h4>Warning</h4>
            Are you sure you want to do this?
            </div>
        </ApprovalCard>
        <ApprovalCard>
       <CommentDetail
         author="sam"
         timeAgo="Today at 4am"
         content="Something Just Like This"
         avatar={faker.image.avatar()}/>
         </ApprovalCard>
         <ApprovalCard>
       <CommentDetail
         author="Girish"
         timeAgo="Today at 12am"
         content="Something You Like"
         avatar={faker.image.avatar()}/>
        </ApprovalCard>
        
        <ApprovalCard>
       <CommentDetail author ="Anuradha"
        timeAgo="Yesterday at 7pm"
         content="You Must Read This"
         avatar={faker.image.avatar()}/>
</ApprovalCard>
    </div>
    );
}

ReactDOM.render(
    <App/>,document.querySelector("#root")
);