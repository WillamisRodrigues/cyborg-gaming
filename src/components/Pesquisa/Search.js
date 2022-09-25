
const Search = (props) => {
    return (
        <form id="search" action="#">
            <input type="text" placeholder={props.texto} id='searchText' name="searchKeyword"  />
        </form>
    )
}

export default Search