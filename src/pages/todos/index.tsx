import Todos from "../../components/unit/todos/todos";
import { withAuth } from "../../components/common/hocs/withAuth";

const TodosPage = () => {
  return <Todos />;
};
export default withAuth(TodosPage);
