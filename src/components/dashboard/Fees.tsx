import React from 'react';
import {
  DollarSign,
  CheckCircle,
  AlertCircle,
  Clock,
} from 'lucide-react';

export function Fees() {
  const fees = [
    {
      id: 1,
      term: 'Spring 2025',
      amount: 100000,
      dueDate: '2025-01-15',
      status: 'paid',
      paidOn: '2025-01-10'
    },
    {
      id: 2,
      term: 'Summer 2025',
      amount: 100000,
      dueDate: '2025-05-15',
      status: 'pending'
    },
    {
      id: 3,
      term: 'Fall 2025',
      amount: 100000,
      dueDate: '2025-09-15',
      status: 'upcoming'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid':
        return <CheckCircle className="h-4 w-4 text-green-500 mr-1" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-500 mr-1" />;
      case 'upcoming':
      default:
        return <Clock className="h-4 w-4 text-gray-500 mr-1" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
              Fees & Payments
            </h2>
            <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors px-6 py-2 text-sm font-medium text-white rounded-lg shadow">
              Make Payment
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-5 rounded-xl shadow-sm border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Paid</p>
                  <p className="text-2xl font-bold text-green-700">₦100,000</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl shadow-sm border border-yellow-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-yellow-600 font-medium">Pending</p>
                  <p className="text-2xl font-bold text-yellow-700">₦100,000</p>
                </div>
                <AlertCircle className="h-8 w-8 text-yellow-500" />
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total</p>
                  <p className="text-2xl font-bold text-gray-800">₦300,000</p>
                </div>
                <DollarSign className="h-8 w-8 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Term
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Amount (₦)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                    Payment Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fees.map((fee) => (
                  <tr key={fee.id} className="hover:bg-gray-50 transition-all">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {fee.term}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      ₦{fee.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {fee.dueDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <span
                        className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${
                          fee.status === 'paid'
                            ? 'bg-green-100 text-green-800'
                            : fee.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {getStatusIcon(fee.status)}
                        {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {fee.paidOn || '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-sm text-gray-500 italic">
            Note: All amounts are in Nigerian Naira (₦).
          </p>
        </div>
      </div>
    </div>
  );
}
