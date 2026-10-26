import './Table.css';

const Table = () => {
    return (
        <div id="section2">
            <div>
                <h1 class="centralcity">Side by Side</h1>
                <p class="ptext centralcity">Neither is superior. Together, they are the engine.</p>
            </div>
            <div class="comparison">
                <table>
                    <tr>
                        <th>DREAMS</th>
                        <th>VS</th>
                        <th>GOALS</th>
                    </tr>
                    <tr>
                        <td>Boundless & unconstrained</td>
                        <td>SCOPE</td>
                        <td>Specific & time-bound</td>
                    </tr>
                    <tr>
                        <td>Emotional & intuitive</td>
                        <td>NATURE</td>
                        <td>Rational & measurable</td>
                    </tr>
                    <tr>
                        <td>Fueled by longing</td>
                        <td>MOTIVATION</td>
                        <td>Fueled by commitment</td>
                    </tr>
                    <tr>
                        <td>Lives in imagination</td>
                        <td>RESIDENCE</td>
                        <td>Lives on a calendar</td>
                    </tr>
                    <tr>
                        <td>Revealed over time</td>
                        <td>DEFINITION</td>
                        <td>Declared up front</td>
                    </tr>
                    <tr>
                        <td>The destination</td>
                        <td>FUNCTION</td>
                        <td>The stepping stones</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Table;