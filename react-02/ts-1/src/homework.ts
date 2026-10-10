// 1
let language: string = "TypeScript"
let version: number = 5.4
let isStableRelease: boolean = false

let data: string | number | boolean | { key: string } = "text"
data = 42
data = true
data = { key: "value" }

let userName: string | null = "Alice"
userName = null

// 2
type BookType = {
  title: string
  author: string
  pages: number
  isPublished: boolean
}
 
const book: BookType = {
  title: "Clean Code",
  author: "Robert Martin",
  pages: 464,
  isPublished: true,
}

type InstructorType = {
  name: string
  rating: number
}

type CourseType = {
  title: string
  instructor: InstructorType
  duration: number
  isAvailable: boolean
}
 
const course: CourseType = {
  title: "JS for beginners",
  instructor: {
    name: "Ivan Ivanov",
    rating: 4.9,
  },
  duration: 52,
  isAvailable: true,
}

// 3
const durations: Array<number> = [120, 240, 360]

type CarType = {
  brand: string
  model: string
  year: number
  price: number
}
 
const cars: Array<CarType> = [
  {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    price: 25000,
  },
  {
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 60000,
  },
  {
    brand: "Tesla",
    model: "Model 3",
    year: 2024,
    price: 45000,
  },
]

type PurchaseType = {
  productName: string
  quantity: number
  store: {
    name: string
    city: string
  }
  totalPrice: number
}
 
const purchases: Array<PurchaseType> = [
  {
    productName: "Laptop",
    quantity: 1,
    store: {
      name: "TechShop",
      city: "Moscow",
    },
    totalPrice: 75000,
  },
  {
    productName: "Mouse",
    quantity: 2,
    store: {
      name: "ElectroWorld",
      city: "Saint Petersburg",
    },
    totalPrice: 3000,
  },
  {
    productName: "Keyboard",
    quantity: 1,
    store: {
      name: "TechShop",
      city: "Moscow",
    },
    totalPrice: 5000,
  },
]

// 4
function calculateArea(width: number, height: number): number {
  return width * height
}

function greetUser(name: string): void {
  console.log(`Hello, ${name}!`)
}

const getModeMessage = (isStrict: boolean): string => {
  return isStrict ? "Strict mode on" : "Strict mode off"
}

type User = {
  id: number
  name: string
  email: string
}
 
function findUserById(userId: number, users: Array<User>): User | undefined {
  return users.find((user) => user.id === userId)
}
 
const users: User[] = [
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
]
 
const result = findUserById(1, users)

// 5
type ProductCardProps = {
  title: string
  price: number
  isAvailable: boolean
  description: string
}
 
function ProductCard({ title, price, isAvailable, description }: ProductCardProps) {
  // return (
  //   <div>
  //     <h2>{title}</h2>
  //     <p>Price: ${price}</p>
  //     <p>Status: {isAvailable ? "In Stock" : "Out of Stock"}</p>
  //     <p>{description}</p>
  //   </div>
  // )
}
 
// Пример использования
// <ProductCard
//   title="Laptop"
//   price={1200}
//   isAvailable={true}
//   description="High performance laptop"
// />

type TaskButtonProps = {
  text: string
  isCompleted: boolean
  priority: string
  onStatusChange: (newStatus: string) => void
}
 
function TaskButton({ text, isCompleted, priority, onStatusChange }: TaskButtonProps) {
  // return (
  //   <div>
  //     <button onClick={() => onStatusChange(!isCompleted)}>
  //       {isCompleted ? "✓" : "○"} {text}
  //     </button>
  //     <span>Priority: {priority}</span>
  //   </div>
  // )
}
 
// Пример использования
// <TaskButton
//   text="Review code"
//   isCompleted={false}
//   priority="high"
//   onStatusChange={(newStatus) => console.log("New status:", newStatus)}
// />

type UserCardProps = {
  name: string
  email: string
  isActive: boolean
  onEdit: (email: string) => void
  onDelete: (email: string) => void
}
 
function UserCard({ name, email, isActive, onEdit, onDelete }: UserCardProps) {
  // return (
  //   <div>
  //     <h3>{name}</h3>
  //     <p>Email: {email}</p>
  //     <p>Status: {isActive ? "Active" : "Inactive"}</p>
  //     <button onClick={() => onEdit(email)}>Edit</button>
  //     <button onClick={() => onDelete(email)}>Delete</button>
  //   </div>
  // )
}
 
// Пример использования
// <UserCard
//   name="John Doe"
//   email="john@example.com"
//   isActive={true}
//   onEdit={(email) => console.log("Editing user:", email)}
//   onDelete={(email) => console.log("Deleting user:", email)}
// />

