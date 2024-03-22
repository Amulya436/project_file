function MyFunctionComponent(props){
    return(
        <div style={{width:'fit-content',margin:'auto'}}>
            <h1 style={{fontFamily:  'Papyrus, Fantasy'}}>Student Details using Function Component</h1>
            <p>Example of student data of 4 person using function</p>
            <table className="table-striped table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Group</th>
                        <th>Number</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                <tr> <td>2211CS010295</td>    <td>K.Sai krishna</td> <td>G7B-31</td> <td>9999999999</td> </tr>
                <tr> <td>2211CS010297</td>    <td>K.H.S.Bharadwaj</td> <td>G7B-33</td> <td>8888888888</td></tr>
                <tr> <td>2211CS010298</td>    <td>K.Bharath</td> <td>G7B-34</td> <td>7777777777</td> </tr>
                <tr> <td>2211cs010324</td>    <td>L.Guna Vardhan Reddy</td> <td>G7B-35</td> <td>6666666666</td> </tr>
                </tbody>
            </table>
        </div>
    );
}
export default MyFunctionComponent;