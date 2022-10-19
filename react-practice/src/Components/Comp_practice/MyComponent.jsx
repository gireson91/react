import ComponentWithProps from './ComponentWithProps';

function MyComponent() {
  return (
    <>
      <h1>Hello World!</h1>
      <h1>Hello All</h1>
      <ComponentWithProps
        header="This is a header"
        content="This is some content"
        number={3}
        nonexistent="this is nonexistent"
      />
    </>
  );
}

export default MyComponent;
