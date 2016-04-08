import React from 'react';

export default class TodosListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditting : false
        }

    }

    onEditClick() {
        this.setState({
            isEditting : true
        });
    }

    onCancelClick() {
        this.setState({
            isEditting : false
        });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;

        this.props.saveTask(oldTask, newTask);
        this.setState({
            isEditting: false
        });
    }

    renderActionsSection() {
        if(this.state.isEditting) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }

    renderTasksSection() {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        };

        if(this.state.isEditting) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td
                onClick={this.props.toggleTask.bind(this, task)}
                style={taskStyle}
            >
                {task}
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTasksSection()}
                <td>
                    {this.props.isCompleted}
                </td>
                {this.renderActionsSection()}
            </tr>
        );
    }

};