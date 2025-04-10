import React from 'react';
import { DollarSign, CheckCircle, AlertCircle, Calendar, Info } from 'lucide-react';

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

  // Format date to be more readable
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format currency in Naira
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Fees & Payments</h2>
              <p className="text-sm text-gray-500 mt-1 flex items-center">
                <Info className="h-4 w-4 mr-1" /> All amounts are in Nigerian Naira (₦)
              </p>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              <span>Make Payment</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-green-50 p-5 rounded-xl border border-green-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Paid</p>
                  <p className="text-2xl font-bold text-green-800 mt-1">{formatCurrency(100000)}</p>
                </div>
                <CheckCircle className="h-10 w-10 text-green-500 p-2 bg-green-100 rounded-full" />
              </div>
            </div>

            <div className="bg-amber-50 p-5 rounded-xl border border-amber-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-600">Pending</p>
                  <p className="text-2xl font-bold text-amber-800 mt-1">{formatCurrency(100000)}</p>
                </div>
                <AlertCircle className="h-10 w-10 text-amber-500 p-2 bg-amber-100 rounded-full" />
              </div>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Total Fees</p>
                  <p className="text-2xl font-bold text-blue-800 mt-1">{formatCurrency(300000)}</p>
                </div>
                {/* <DollarSign className="h-10 w-10 text-blue-500 p-2 bg-blue-100 rounded-full" /> */}
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Term
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Payment Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {fees.map((fee) => (
                    <tr key={fee.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{fee.term}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-semibold text-gray-800">
                        {formatCurrency(fee.amount)}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-700">
                          <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                          {formatDate(fee.dueDate)}
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                            fee.status === 'paid'
                              ? 'bg-green-100 text-green-800'
                              : fee.status === 'pending'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-600">
                        {fee.paidOn ? (
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            {formatDate(fee.paidOn)}
                          </div>
                        ) : (
                          '-'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500 flex items-center">
            <Info className="h-4 w-4 mr-2" />
            Payments are due on the specified dates. Late payments may incur additional charges.
          </div>
        </div>
      </div>
    </div>
  );
}