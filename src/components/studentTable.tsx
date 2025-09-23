import { Student } from "@/types/Student"

type Props = {
    students: Student[];
}
export const StudentTable = ({students}: Props) => {
    return (
        <table className="w-full border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th className="p-3">Nome</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Nota 1</th>
                    <th className="p-3">Nota 2</th>
                    <th className="p-3">Média</th>
                </tr>
            </thead>
            <tbody>
                {students.map(item =>(
                    <tr key={item.id} className="text-gray-800 border-b border-gray-700 bg-gray-800 hover:bg-gray-500">
                        <td className="p-3 flex items-center">
                            <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full mr-3 inline-block"/>
                            <div>
                                <div className="text-white font-bold">{item.name}</div>
                                <div className="text-sm text-gray-600">{item.email}</div>
                            </div>
                        </td>
                        <td>
                            {item.active  && <div className="text-white px-2 inline-block rounded border-green-500 bg-green-500">Ativo</div>}
                            {!item.active && <div className="text-white px-2 inline-block rounded border-red-500 bg-red-500">Inativo</div>}
                        </td>
                        <td className="text-white">{item.grade1.toFixed(1)}</td>
                        <td className="text-white">{item.grade2.toFixed(1)}</td>
                        <td className="text-white">{item.active ? ((item.grade1 + item.grade2) / 2).toFixed(1) : "Inativo"}</td>
                    </tr>
                ))}
           
            </tbody>
        </table>
    )
}