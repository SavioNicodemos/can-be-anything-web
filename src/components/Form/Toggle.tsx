type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  checked: boolean;
};

const Toggle = ({ checked, ...props }: Props) => {
  return (
    <input
      {...props}
      type="checkbox"
      className="toggle toggle-success"
      checked={checked}
    />
  )
}

export default Toggle