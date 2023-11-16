import { formatter } from "../src/util/investment";
export default function Result({ result,userInputs }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                
                {result.map((item) => (
                    <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(item.totalInterest)}</td>
                        <td>{formatter.format(item.investmentCapital)}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}
