const AddGamers = ({ newPlayer, submitHandler, handleAdd }) => {
    return (
        <form>
            <input
                type="text"
                onChange={newPlayer}
                placeholder="Enter name:"
            />
            <button
                type="button"
                onClick={handleAdd}
            >
                Add Player
            </button>
        </form>
    )
}

export default AddGamers;

