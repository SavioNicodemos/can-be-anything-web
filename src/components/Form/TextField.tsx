import { ErrorMessage } from "..";

type Props = JSX.IntrinsicElements['input'] & {
  errorMessage?: string;
};

const TextField = ({ errorMessage, ...props }: Props) => {
  return (
    <div>
      <input
        {...props}
        type="text"
        className="input input-bordered w-full max-w-xs"
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </div>
  )
}

export default TextField