export type TaskDetailsData = {
  id: string
  attributes: TaskDetailsDto
}

type TaskDetailsDto = {
  title: string
  description: string | null
}

type GetTaskOutput = {
  data: TaskDetailsData
}

export const getTask = (boardId: string | null, selectedTaskId: string) => {
  const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
    headers: {
      'api-key': 'd3a87c43-74d4-4047-baf4-7c9d4dbb9a5b'
    }
  }).then(res => res.json())
  return promise
}

export type GlobalTaskListItemJsonApiData = {
  id: string
  attributes: GlobalTaskListItemDto
}

type GlobalTaskListItemDto = {
  title: string
  boardId: string
  addedAt: string
  status: number
  priority: number
}

type GlobalTaskListResponse = {
  data: Array<GlobalTaskListItemJsonApiData>
}

export const getTasks = () => {
  const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
    headers: {
      'api-key': 'd3a87c43-74d4-4047-baf4-7c9d4dbb9a5b'
    }
  }).then(res => res.json())
  return promise
}