import { DetailsContainer } from './DetailsComponent.styles';
import {
  DetailsHeader,
  DetailsCard,
  DetailsSubTaskList,
  DetailsButtons,
} from './';

const DetailsComponent = ({ todo }) => {
  return (
    <DetailsContainer className="details-container">
      <DetailsHeader />
      <DetailsCard todo={todo} />
      <DetailsSubTaskList subTasks={todo.subTasks} />
      <DetailsButtons todo={todo} />
    </DetailsContainer>
  );
};
export default DetailsComponent;
