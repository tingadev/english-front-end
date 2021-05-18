import { useFormikContext } from "formik";
import React from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import {
  EnglishCertificateType,
  MediaType,
  NewQuestionInput,
  QuestionFragment,
  useGetPartsLazyQuery,
} from "../../../../schema/schema";
import ErrorMessage from "../../components/Error";
import {
  EnglishCertificateOptions,
  SkillsTypeOptions,
} from "../Part/CreateAndEditPart";
import { OptionsType } from "../TestGroup/CreateAndEditTestGroup";
import Select from "react-select";
import { ImageUploadCustom } from "../../components/ImageUploader";
import config from "../../../../config";
import { SelectCustom } from "../../components/SelectCustom";
import { QuestionContext } from "../QuestionsAndTest/QuestionContext";
interface GeneralQuestionProps {
  modal?: boolean;
  questionData?: QuestionFragment;
}
let PartsOptions: OptionsType[] = [
  {
    value: "0",
    label: "Chose part",
  },
];
const GeneralQuestion: React.FC<GeneralQuestionProps> = ({
  modal,
  questionData,
}) => {
  const formik = useFormikContext<NewQuestionInput>();
  const { partId } = React.useContext(QuestionContext);
  let urlDefault: string = "";
  const [path, setPath] = React.useState<string | null>(null);
  const [partSelect, setPartSelect] = React.useState<OptionsType | undefined>(PartsOptions[0]);
  const [certificateTypeSelect, setCertificateTypeSelect] = React.useState<OptionsType | undefined>(
    EnglishCertificateOptions[0]
  );
  const [skillTypeSelect, setSkillTypeSelect] = React.useState<OptionsType | undefined>(
    SkillsTypeOptions[0]
  );

  const [partsQuery, partsResponse] = useGetPartsLazyQuery();
  const parts = partsResponse.data?.getParts.parts;
  React.useEffect(() => {
    formik.setFieldValue("image", path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  React.useEffect(() => {
    partsQuery({
      variables: {
        data: {
          certificateType:
            certificateTypeSelect?.value as EnglishCertificateType,
        },
      },
    });
    PartsOptions = [
      {
        value: "0",
        label: "Chose part",
      },
    ];
    if (parts) {
      parts
        .filter((part) => part.skillType === skillTypeSelect?.value)
        .map((part) => {
          const optionPart = {
            value: part.id,
            label: part.partName,
          };
          PartsOptions = [...PartsOptions, optionPart];
          return part;
        });
        
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [certificateTypeSelect, skillTypeSelect, parts]);

  React.useMemo(() => {
    if (questionData && parts) {
      setSkillTypeSelect(SkillsTypeOptions.find((prop) => prop.value === formik.initialValues.skillType));
      setCertificateTypeSelect(EnglishCertificateOptions.find((prop) => prop.value === formik.initialValues.certificateType));
      setPartSelect(PartsOptions.find((props) => props.value === partId))
    }
  }, [formik.initialValues, questionData, PartsOptions]);

  if (questionData) {
    urlDefault = questionData.image ? config.PATH_IMAGE + questionData.image : '';
  }

  return (
    <>
      <Row>
        <Col className="pr-1" md="6">
          <ErrorMessage message={formik.errors.questionName} />
            <Row>
              <Col md="6" className="pr-1">
                <FormGroup>
                  <label>Type of test</label>
                  <SelectCustom
                    onChange={(opt: any) => {
                      setPartSelect(PartsOptions[0]);
                      setCertificateTypeSelect(opt);
                      formik.setFieldValue("certificateType", opt.value);
                    }}
                    value={certificateTypeSelect}
                    placeholder="Chose type of Test"
                    name="certificateType"
                    options={EnglishCertificateOptions}
                    zIndex={1000}
                    isDisabled={modal}
                  />
                  <ErrorMessage message={formik.errors.certificateType} />
                </FormGroup>
              </Col>
              <Col md="6" className="pr-1 pl-1">
                <FormGroup>
                  <label>Skill</label>
                  <SelectCustom
                    onChange={(opt: any) => {
                      setPartSelect(PartsOptions[0]);
                      setSkillTypeSelect(opt);
                      formik.setFieldValue("skillType", opt.value);
                    }}
                    placeholder="Single Select"
                    value={skillTypeSelect}
                    name="skillType"
                    options={SkillsTypeOptions}
                    zIndex={1000}
                    isDisabled={modal || partsResponse.loading}
                    isLoading={partsResponse.loading}
                  />
                  <ErrorMessage message={formik.errors.skillType} />
                </FormGroup>
              </Col>
              <Col md="12" className="pr-1">
                <FormGroup>
                  <label>Part</label>
                  <Select
                    className="react-select react-select-primary"
                    onChange={(opt: any) => {
                      setPartSelect(opt);
                      formik.setFieldValue("partId", opt.value);
                    }}
                    classNamePrefix="react-select"
                    placeholder="Single Select"
                    value={partSelect}
                    name="partId"
                    options={PartsOptions}
                    isDisabled={Boolean(!partId) || partsResponse.loading}
                    isLoading={partsResponse.loading}
                  />
                  <ErrorMessage message={formik.errors.partId} />
                </FormGroup>
              </Col>
                <Col className="pr-1 " md="6">
                  <FormGroup>
                    <label>Audio Second</label>
                    <Input
                      placeholder="Audio Second"
                      name="audioSec"
                      type="number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.audioSec}
                    />
                  </FormGroup>
                  <ErrorMessage message={formik.errors.audioSec} />
                </Col>
                <Col className="pr-1 " md="6">
                  <FormGroup>
                    <label>Audio Second Vietnam</label>
                    <Input
                      placeholder="Audio Second Vietnam"
                      name="audioSecVN"
                      type="number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.audioSecVN}
                    />
                  </FormGroup>
                  <ErrorMessage message={formik.errors.audioSecVN} />
                </Col>
            </Row>
        </Col>
        <Col className="pl-1" md="6">
          <Input placeholder="Chose file" name="image" type="hidden" />
            <ImageUploadCustom
                type={MediaType.Image}
                setPath={setPath}
                url={urlDefault}
                singleImage
            />
          <ErrorMessage message={formik.errors.image} />
        </Col>
        <Input type="hidden" name="testId" />
      </Row>
    </>
  );
};

export default GeneralQuestion;
