import React from "react";
import orderBy from "lodash/orderBy";
import { Empty } from "antd";

import  DialogItem  from "../DialogItem";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId }) => {
  
  console.log(items);
  return(
  <div className="dialogs"> 
    {items.length ? (
      orderBy(items, ["created_at"], ["desc"]).map(item => (
        <DialogItem
          key={item.id}
          isMe={item.author.id === userId}
          userId={userId}
          currentDialogId={currentDialogId}
          {...item}
        />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Ничего не найдено"
      />
    )}
  </div>
)};

export default Dialogs;
