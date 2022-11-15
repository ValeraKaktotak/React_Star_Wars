import cn from 'classnames'
import style from './App.module.css'

const App = () => {
  return (
    <div className={cn(style.App, style.text)}>
      Hello
    </div>
  );
}

export default App;
