import React from "react";
import {Badge, Card, ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons'
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

const CustomFieldInItem = ({field}) => {
    const fieldType = field.fieldsname.type;

    const renderCusomField = () => {
        switch (fieldType){
            case "Bool":
                return (
                        <ListGroup.Item>{`${field.fieldsname.name}: `}
                            <Badge bg={field.value ? "success": "danger"}>
                                <FontAwesomeIcon icon={field.value ? faCheck: faTimes}/>
                            </Badge>
                        </ListGroup.Item>

                )
            case "Text":
                return( <ListGroup.Item>
                    <Card.Text>{field.fieldsname.name}: </Card.Text>
                    <ReactMarkdown children={field.value}
                                   remarkPlugins={[remarkGfm]}/>
                </ListGroup.Item>)
            default:
                return  <ListGroup.Item>{field.fieldsname.name}: {field.value}</ListGroup.Item>

        }
    }
    return renderCusomField()
}

export default CustomFieldInItem;