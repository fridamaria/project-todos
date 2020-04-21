import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector(store => store.todos.items[itemIndex]) //Ev ta bort då jag inte behöver hämta igen, kan lägga in som props istället, se TodoItems

  const dispatch = useDispatch()

  const onRemoveClicked = () => {
    dispatch(todos.actions.removeTodo({ itemIndex }))
  }

  const onCheckClick = () => {
    dispatch(todos.actions.setDone({ itemIndex })
    )
  }

  const itemChecked = item.done

  return (
    <Styled>
      <Label itemChecked={itemChecked}>
        <Checkbox
          type='button'
          onClick={onCheckClick}
          itemChecked={itemChecked}
        ></Checkbox>
        {item.description}
      </Label>
      <RemoveButton
        aria-label={`Delete ${item.description}`}
        type="button"
        onClick={onRemoveClicked}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </RemoveButton>
    </Styled>
  )
}

const Styled = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 10px 0;

  @media (min-width: 768px) {
    margin-bottom: 15px;
  }
`
const Label = styled.label`
  display: flex;
  align-items: center;
  color: ${prop => prop.itemChecked ? '#888d64' : '#3e3e2d'};
  font-size: 16px;
  text-decoration: ${prop => prop.itemChecked ? 'line-through' : ''};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const Checkbox = styled.button`
  width: 35px;
  height: 35px;
  margin-right: 10px;
  padding-left: 8px;
  padding-bottom: 6px;
  border: none;
  border-radius: 10px; 
  background: #888d64;
  color: #fff;
  font-size: 20px;

  ::after {
    content: '';
    display: ${prop => prop.itemChecked ? 'block' : 'none'};
    width: 15px;
    height: 7px;
    border-left: 3px solid;
    border-bottom: 3px solid;
    /* border-radius: 0 4px; */
    transform: rotate(-50deg);
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    padding-left: 15px;
  }
`

const RemoveButton = styled.button`
  margin-right: 7px;
  border: none;
  background: none;
  color: #888d64;
  font-size: 25px;

  @media (min-width: 768px) {
    font-size: 35px;
    margin-right: 4px;
  }
`