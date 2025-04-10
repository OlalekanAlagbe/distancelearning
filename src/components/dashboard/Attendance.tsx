import React from 'react';
import { Calendar, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export function Attendance() {
  const attendanceData = {
    totalDays: 120,
    presentDays: 112,
    absentDays: 5,
    lateDays: 3,
    percentage: 93.33,
    records: [
      {
        date: '2025-03-15',
        status: 'present',
        timeIn: '8:55 AM',
        timeOut: '3:30 PM',
        subject: 'All Classes'
      },
      {
        date: '2025-03-14',
        status: 'late',
        timeIn: '9:15 AM',
        timeOut: '3:30 PM',
        subject: 'All Classes',
        reason: 'Traffic delay'
      },
      {
        date: '2025-03-13',
        status: 'present',
        timeIn: '8:50 AM',
        timeOut: '3:30 PM',
        subject: 'All Classes'
      },
      {
        date: '2025-03-12',
        status: 'absent',
        subject: 'All Classes',
        reason: 'Medical leave'
      },
      {
        date: '2025-03-11',
        status: 'present',
        timeIn: '8:45 AM',
        timeOut: '3:30 PM',
        subject: 'All Classes'
      }
    ]
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'late':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'late':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Attendance Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-green-600">Present</p>
                  <p className="text-2xl font-semibold text-green-700">{attendanceData.presentDays}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-red-600">Absent</p>
                  <p className="text-2xl font-semibold text-red-700">{attendanceData.absentDays}</p>
                </div>
                <XCircle className="h-8 w-8 text-red-500" />
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-yellow-600">Late</p>
                  <p className="text-2xl font-semibold text-yellow-700">{attendanceData.lateDays}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-500" />
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-indigo-600">Percentage</p>
                  <p className="text-2xl font-semibold text-indigo-700">{attendanceData.percentage}%</p>
                </div>
                <Calendar className="h-8 w-8 text-indigo-500" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time In
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time Out
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {attendanceData.records.map((record, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(record.status)}
                        <span className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(record.status)}`}>
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.timeIn || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.timeOut || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.reason || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}