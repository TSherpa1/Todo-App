import { DetailsContainer } from './DetailsComponent.styles';
import {
  DetailsHeader,
  DetailsCard,
  DetailsSubTaskList,
  DetailsButtons,
} from './';

const DetailsComponent = ({ todo }) => {
  console.log(todo);
  return (
    <DetailsContainer className="details-container">
      <DetailsHeader />
      <DetailsCard todo={todo} />
      <DetailsSubTaskList subTasks={todo.subTasks} />
      <DetailsButtons />
    </DetailsContainer>
  );
};
export default DetailsComponent;
