import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: "Salary",
					type: "deposit",
					category: "Work",
					amount: 20000,
					createdAt: new Date("2021-10-12 09:00:00"),
				},
				{
					id: 2,
					title: "Groceries",
					type: "withdraw",
					category: "Food",
					amount: 1200,
					createdAt: new Date("2021-10-13 17:34:00"),
				}
			]
		})
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction')
		})

		this.post('/transactions', (schema, req) => {
			const data = JSON.parse(req.requestBody)
			return schema.create('transaction', data)
		})
	}
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
