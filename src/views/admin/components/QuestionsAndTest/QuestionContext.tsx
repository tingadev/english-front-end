
import React, { useState } from 'react';
import { EnglishCertificateType, PartIdsInput, TestQuestionFragment, useUpdateTestMutation } from '../../../../schema/schema';

interface QuestionContext {
    setIsOpenModal: (isOpenModal: boolean) => void;
    isOpenModal: boolean;
    certificateType: EnglishCertificateType;
    questions?: TestQuestionFragment[];
    setPartId: (partId: string) => void;
    partId: string;
    setIsOpenModalCreateQuestion: (value: boolean) => void;
    isOpenModalCreateQuestion: boolean;
    setQuestionIdModal: (questionId: string) => void;
    questionIdModal: string;
    path: string | null;
    setPath: (value: string) => void;
    isOpenModalAddPart: boolean;
    setIsOpenModalAddPart: (value: boolean) => void;
    partIds?: PartIdsInput;
    setPartIds: (val: PartIdsInput) => void;
    updateTestMutation: any;
    updateTestMutationResult: any;
    isOpenModalAddTest: boolean;
    setIsOpenModalAddTest: (val: boolean) => void;
    isOpenModalAddTestCategory: boolean;
    setIsOpenModalAddTestCategory: (val: boolean) => void;
}
interface QuestionContextProviderProps {
    certificateType: EnglishCertificateType;
}

export const QuestionContext = React.createContext<QuestionContext>(({} as any) as QuestionContext);

const useQuestionProvider = ({
    certificateType
}: QuestionContextProviderProps): QuestionContext => {
    const [updateTestMutation, updateTestMutationResult] = useUpdateTestMutation();
    const [partId, setPartId] = React.useState('');
    const [isOpenModal, setIsOpenModal] = React.useState(false);
    const [isOpenModalCreateQuestion, setIsOpenModalCreateQuestion] = React.useState(false);
    const [isOpenModalAddPart, setIsOpenModalAddPart] = React.useState(false);
    const [isOpenModalAddTest, setIsOpenModalAddTest] = React.useState(false);
    const [isOpenModalAddTestCategory, setIsOpenModalAddTestCategory] = React.useState(false);
    const [questionIdModal, setQuestionIdModal] = React.useState('');
    const [path, setPath] = React.useState<string | null>(null);
    const [partIds, setPartIds] = React.useState<PartIdsInput>()
    React.useEffect(() => {
        !isOpenModalCreateQuestion && setQuestionIdModal('');
    },[isOpenModalCreateQuestion])

    const questionProvider: QuestionContext = {
        setIsOpenModal,
        isOpenModal,
        certificateType,
        isOpenModalCreateQuestion,
        setIsOpenModalCreateQuestion,
        partId,
        setPartId,
        questionIdModal,
        setQuestionIdModal,
        path,
        setPath,
        isOpenModalAddPart,
        setIsOpenModalAddPart,
        partIds,
        setPartIds,
        updateTestMutation,
        updateTestMutationResult,
        isOpenModalAddTest,
        setIsOpenModalAddTest,
        isOpenModalAddTestCategory,
        setIsOpenModalAddTestCategory,
    };
    return questionProvider;
};

const QuestionContextProvider: React.FC<QuestionContextProviderProps> = ({ children, certificateType }) => {
    const questionContextProvider = useQuestionProvider({ certificateType });

    return <QuestionContext.Provider value={questionContextProvider}>{children}</QuestionContext.Provider>;
};

export default QuestionContextProvider;
