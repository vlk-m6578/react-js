import './App.css'

// const tasks = null;
const tasks = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: false,
    addedAt: "1 сентября",
    priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
    priority: 0,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
    priority: 1,
  },
  {
    id: 4,
    title: "Срочно отправить рабочий отчет",
    isDone: false,
    addedAt: "4 сентября",
    priority: 4,
  },
  {
    id: 5,
    title: "Заплатить за коммунальные услуги",
    isDone: false,
    addedAt: "3 сентября",
    priority: 3,
  },
]

export function App() {

  const getTaskColorPriority = (priority) => {
    switch (priority) {
      case 0:
        return '#ffffff'
      case 1:
        return '#ffd7b5';
      case 2:
        return '#ffb38a';
      case 3:
        return '#ff9248';
      case 4:
        return '#ff6700';
      default:
        return '#ffffff';
    }
  }

  if (tasks === null) {
    return <h1>Загрузка...</h1>
  }

  if (tasks.length === 0) {
    return <h1>Задачи отсутствуют</h1>
  }

  return (
    <div className='app-tasks'>
      {
        tasks.map(task => {
          return (
            <div className='app-task' style={{ background: getTaskColorPriority(task.priority) }}>
              <strong>Заголовок: </strong> <span style={{ textDecorationLine: task.isDone ? 'line-through' : 'none' }}>{task.title}</span> <br></br>
              <strong>Статус: </strong> <input type='checkbox' checked={task.isDone} /> <br></br>
              <strong>Дата создания задачи: </strong> {task.addedAt}
            </div>
          )
        })
      }
    </div>
  )
}
