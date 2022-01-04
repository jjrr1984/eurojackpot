import { useDrawings } from "../../hooks";
import classNames from "classnames";
import {
  Title,
  Numbers,
  Prizes,
  Footer
} from "../../components";

function App() {

  const {
    isFetching,
    lastDate,
    regularNumbers,
    specialNumbers,
    lastOdds,
    nextDate
  } = useDrawings();

  const appClassNames = classNames({
    "App": !isFetching,
    "isLoading": isFetching
  });

  return (
    <div data-testid="app_main_container" className={appClassNames}>
      {!isFetching && (
        <>
          <Title lastDate={lastDate} />
          <Numbers
            standardNumbers={regularNumbers}
            specialNumbers={specialNumbers} />
          <Prizes
            odds={lastOdds} />
          <Footer nextDate={nextDate} />
        </>
      )}
    </div>
  );
}

export default App;
