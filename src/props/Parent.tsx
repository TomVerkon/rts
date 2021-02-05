import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked!')}>
      lakjsdffhdl
    </ChildAsFC>
  );
};

export default Parent;
