import { useTheme } from "./Theme"

const MyComponent = () => {
  const theme = useTheme();
  return (
    <div>
      <p>Current theme: {theme}</p>
    </div>
  )
}

export default MyComponent