import TodoDetail from "../../components/unit/todos/detail/details";
import { withAuth } from "../../components/common/hocs/withAuth";

const DetailPage = () => {
  return <TodoDetail />;
};
export default withAuth(DetailPage);
