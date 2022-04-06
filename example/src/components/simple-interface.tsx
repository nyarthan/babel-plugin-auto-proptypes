interface Props {
  string: string;
  number: number;
  boolean: boolean;
}

const SimpleInterface = (props: Props) => {
  return (
    <div>
      <code>{props}</code>
    </div>
  )
}

export default SimpleInterface;
