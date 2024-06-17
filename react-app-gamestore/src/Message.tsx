
// PascalCasing, this is a Message component
function Message(){
    const name = '';
    if (name)
        return <h1>Hello {name}</h1>; //JSX: JavaScript XML
    else
        return <h1>Hello World!</h1>;
}

export default Message;