import React from 'react';
import TodosList from './todos-list';
import CreateTodos from './create-todos';
import _ from 'lodash';

const todos = [
    {
        task : 'say Hello',
        isCompleted: false
    },
    {
        task : 'eat dinner',
        isCompleted: true
    }
];
export default class App extends React.Component {

    constructor( props ) {
        super(props);

        this.state = {
            todos
        }
    }

    render() {
        return (
            <div>
                <CreateTodos
                    createTask={this.createTask.bind(this)}
                    todos={this.state.todos}
                />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task ===  task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({
            todos: this.state.todos
        });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task ===  oldTask);
        foundTodo.task = newTask;
        this.setState({
            todos: this.state.todos
        });
    }

    deleteTask(oldTask) {
        _.remove(this.state.todos, todo => todo.task === oldTask);
        this.setState({
            todos : this.state.todos
        })
    }
};