const Table = () => {
  return (
    <div className="w-8/12 mx-auto p-3 mt-5 flex items-center justify-center">
        <table className="border-collapse border-4 border-indigo-200 rounded-md w-full text-center">
            <thead>
                <tr>
                    <th className="max-w-sm border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 cursor-pointer">Humedad Tierra</th>
                    <th className="max-w-sm border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 cursor-pointer">Temperatura agua</th>
                    <th className="max-w-sm border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 cursor-pointer">Vaciado tanque</th>
                    <th className="max-w-sm border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 cursor-pointer">Contenedor Semillas</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-300">3.5</td>
                    <td className="border border-slate-300">300</td>
                    <td className="border border-slate-300">Tanque vacio</td>
                    <td className="border border-slate-300">50%</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table