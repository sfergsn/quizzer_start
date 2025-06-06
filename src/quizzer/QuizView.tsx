import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizExpanded } from "./QuizExpanded";
import { QuizEdit } from "./QuizEdit";

import "./QuizView.css";

export const QuizView = ({
    quiz,
    editQuiz,
    deleteQuiz,
    resetView
}: {quiz: Quiz, editQuiz: (index: number, quiz: Quiz) => void, 
    deleteQuiz: (index: number) => void, resetView: () => void
}) => {
    const [edit, setEdit] = useState(false);

    const switchEdit = () => {
        setEdit(edit);
    };

    return (
        <div className="quiz_card">
            {edit && (
                <QuizEdit
                    quiz={quiz}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                    switchEdit={switchEdit}
                    resetView={resetView}
                ></QuizEdit>
            )}
            {!edit && (
                <QuizExpanded
                    quiz={quiz}
                    deleteQuiz={deleteQuiz}
                    editQuiz={editQuiz}
                    resetView={resetView}
                    switchEdit={switchEdit}
                ></QuizExpanded>
            )}
        </div>
    );
};
