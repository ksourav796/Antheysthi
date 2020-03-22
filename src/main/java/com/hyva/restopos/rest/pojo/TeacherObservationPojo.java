package com.hyva.restopos.rest.pojo;

import lombok.Data;

import java.sql.Date;

@Data
public class TeacherObservationPojo {
    private Long teachingObservationId;
    private String teacherName;
    private String subjectId;
    private Date sdate;
    private Date edate;
    private String inductionSetStudentReadyScore;
    private String inductionSetStudentReadyRemarks;
    private String inductionSetGreetingProceduresScore;
    private String inductionSetGreetingProceduresRemarks;
    private String inductionSetCalenderForDayScore;
    private String inductionSetCalenderForDayRemarks;
    private String inductionSetLessonObjectiveScore;
    private String inductionSetLessonObjectiveRemarks;
    private String deliverySetStimulusScore;
    private String deliverySetStimulusRemarks;
    private String deliverySetPreviousLessonScore;
    private String deliverySetPreviousLessonRemarks;
    private String deliverySetTeachingFromGeneralScore;
    private String deliverySetTeachingFromGeneralRemarks;
    private String deliverySetWhiteBoardScore;
    private String deliverySetWhiteBoardScoreRemarks;
    private String deliverySetTeachingAidsScore;
    private String deliverySetTeachingAidsRemarks;
    private String deliverySetTextbookRefScore;
    private String deliverySetTextbookRefRemarks;
    private String deliverySetMakingAssociationScore;
    private String deliverySetMakingAssociationRemarks;
    private String deliverySetThinkingLevelScore;
    private String deliverySetThinkingLevelRemarks;
    private String deliverySetInteractionStudentScore;
    private String deliverySetInteractionStudentRemarks;
    private String deliverySetAppropriateLevelScore;
    private String deliverySetAppropriateLevelRemarks;
    private String deliverySetProperLanguageScore;
    private String deliverySetProperLanguageRemarks;
    private String deliverySetPronounciationScore;
    private String deliverySetPronounciationRemarks;
    private String deliverySetStudentConfidenceScore;
    private String deliverySetStudentConfidenceRemarks;
    private String deliverySetLearningStylesScore;
    private String deliverySetLearningStylesRemarks;
    private String deliverySetSupervisingClassworkScore;
    private String deliverySetSupervisingClassworkRemarks;
    private String deliverySetClassroomManagementScore;
    private String deliverySetClassroomManagementRemarks;
    private String deliverySetStudentManagementScore;
    private String deliverySetStudentManagementRemarks;
    private String lessonConclusionLessonPlanScore;
    private String lessonConclusionLessonPlanRemarks;
    private String lessonConclusionStudentAchievementScore;
    private String lessonConclusionStudentAchievementRemarks;
    private String lessonConclusionNextLessonScore;
    private String lessonConclusionNextLessonRemarks;
    private String additionalRemarks;
    private String observationReport;
    private String signature;
    private String type;
    private String noAttempt;
    private String belowExpectation;
    private String minReq;
    private String goodAttempt;
    private String wellDone;
    private String hrId;
    private String level;
    private String salaryoffered;
    private Date reportingDate;

    public Long getTeachingObservationId() {
        return teachingObservationId;
    }

    public void setTeachingObservationId(Long teachingObservationId) {
        this.teachingObservationId = teachingObservationId;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(String subjectId) {
        this.subjectId = subjectId;
    }

    public Date getSdate() {
        return sdate;
    }

    public void setSdate(Date sdate) {
        this.sdate = sdate;
    }

    public Date getEdate() {
        return edate;
    }

    public void setEdate(Date edate) {
        this.edate = edate;
    }

    public String getInductionSetStudentReadyScore() {
        return inductionSetStudentReadyScore;
    }

    public void setInductionSetStudentReadyScore(String inductionSetStudentReadyScore) {
        this.inductionSetStudentReadyScore = inductionSetStudentReadyScore;
    }

    public String getInductionSetStudentReadyRemarks() {
        return inductionSetStudentReadyRemarks;
    }

    public void setInductionSetStudentReadyRemarks(String inductionSetStudentReadyRemarks) {
        this.inductionSetStudentReadyRemarks = inductionSetStudentReadyRemarks;
    }

    public String getInductionSetGreetingProceduresScore() {
        return inductionSetGreetingProceduresScore;
    }

    public void setInductionSetGreetingProceduresScore(String inductionSetGreetingProceduresScore) {
        this.inductionSetGreetingProceduresScore = inductionSetGreetingProceduresScore;
    }

    public String getInductionSetGreetingProceduresRemarks() {
        return inductionSetGreetingProceduresRemarks;
    }

    public void setInductionSetGreetingProceduresRemarks(String inductionSetGreetingProceduresRemarks) {
        this.inductionSetGreetingProceduresRemarks = inductionSetGreetingProceduresRemarks;
    }

    public String getInductionSetCalenderForDayScore() {
        return inductionSetCalenderForDayScore;
    }

    public void setInductionSetCalenderForDayScore(String inductionSetCalenderForDayScore) {
        this.inductionSetCalenderForDayScore = inductionSetCalenderForDayScore;
    }

    public String getInductionSetCalenderForDayRemarks() {
        return inductionSetCalenderForDayRemarks;
    }

    public void setInductionSetCalenderForDayRemarks(String inductionSetCalenderForDayRemarks) {
        this.inductionSetCalenderForDayRemarks = inductionSetCalenderForDayRemarks;
    }

    public String getInductionSetLessonObjectiveScore() {
        return inductionSetLessonObjectiveScore;
    }

    public void setInductionSetLessonObjectiveScore(String inductionSetLessonObjectiveScore) {
        this.inductionSetLessonObjectiveScore = inductionSetLessonObjectiveScore;
    }

    public String getInductionSetLessonObjectiveRemarks() {
        return inductionSetLessonObjectiveRemarks;
    }

    public void setInductionSetLessonObjectiveRemarks(String inductionSetLessonObjectiveRemarks) {
        this.inductionSetLessonObjectiveRemarks = inductionSetLessonObjectiveRemarks;
    }

    public String getDeliverySetStimulusScore() {
        return deliverySetStimulusScore;
    }

    public void setDeliverySetStimulusScore(String deliverySetStimulusScore) {
        this.deliverySetStimulusScore = deliverySetStimulusScore;
    }

    public String getDeliverySetStimulusRemarks() {
        return deliverySetStimulusRemarks;
    }

    public void setDeliverySetStimulusRemarks(String deliverySetStimulusRemarks) {
        this.deliverySetStimulusRemarks = deliverySetStimulusRemarks;
    }

    public String getDeliverySetPreviousLessonScore() {
        return deliverySetPreviousLessonScore;
    }

    public void setDeliverySetPreviousLessonScore(String deliverySetPreviousLessonScore) {
        this.deliverySetPreviousLessonScore = deliverySetPreviousLessonScore;
    }

    public String getDeliverySetPreviousLessonRemarks() {
        return deliverySetPreviousLessonRemarks;
    }

    public void setDeliverySetPreviousLessonRemarks(String deliverySetPreviousLessonRemarks) {
        this.deliverySetPreviousLessonRemarks = deliverySetPreviousLessonRemarks;
    }

    public String getDeliverySetTeachingFromGeneralScore() {
        return deliverySetTeachingFromGeneralScore;
    }

    public void setDeliverySetTeachingFromGeneralScore(String deliverySetTeachingFromGeneralScore) {
        this.deliverySetTeachingFromGeneralScore = deliverySetTeachingFromGeneralScore;
    }

    public String getDeliverySetTeachingFromGeneralRemarks() {
        return deliverySetTeachingFromGeneralRemarks;
    }

    public void setDeliverySetTeachingFromGeneralRemarks(String deliverySetTeachingFromGeneralRemarks) {
        this.deliverySetTeachingFromGeneralRemarks = deliverySetTeachingFromGeneralRemarks;
    }

    public String getDeliverySetWhiteBoardScore() {
        return deliverySetWhiteBoardScore;
    }

    public void setDeliverySetWhiteBoardScore(String deliverySetWhiteBoardScore) {
        this.deliverySetWhiteBoardScore = deliverySetWhiteBoardScore;
    }

    public String getDeliverySetWhiteBoardScoreRemarks() {
        return deliverySetWhiteBoardScoreRemarks;
    }

    public void setDeliverySetWhiteBoardScoreRemarks(String deliverySetWhiteBoardScoreRemarks) {
        this.deliverySetWhiteBoardScoreRemarks = deliverySetWhiteBoardScoreRemarks;
    }

    public String getDeliverySetTeachingAidsScore() {
        return deliverySetTeachingAidsScore;
    }

    public void setDeliverySetTeachingAidsScore(String deliverySetTeachingAidsScore) {
        this.deliverySetTeachingAidsScore = deliverySetTeachingAidsScore;
    }

    public String getDeliverySetTeachingAidsRemarks() {
        return deliverySetTeachingAidsRemarks;
    }

    public void setDeliverySetTeachingAidsRemarks(String deliverySetTeachingAidsRemarks) {
        this.deliverySetTeachingAidsRemarks = deliverySetTeachingAidsRemarks;
    }

    public String getDeliverySetTextbookRefScore() {
        return deliverySetTextbookRefScore;
    }

    public void setDeliverySetTextbookRefScore(String deliverySetTextbookRefScore) {
        this.deliverySetTextbookRefScore = deliverySetTextbookRefScore;
    }

    public String getDeliverySetTextbookRefRemarks() {
        return deliverySetTextbookRefRemarks;
    }

    public void setDeliverySetTextbookRefRemarks(String deliverySetTextbookRefRemarks) {
        this.deliverySetTextbookRefRemarks = deliverySetTextbookRefRemarks;
    }

    public String getDeliverySetMakingAssociationScore() {
        return deliverySetMakingAssociationScore;
    }

    public void setDeliverySetMakingAssociationScore(String deliverySetMakingAssociationScore) {
        this.deliverySetMakingAssociationScore = deliverySetMakingAssociationScore;
    }

    public String getDeliverySetMakingAssociationRemarks() {
        return deliverySetMakingAssociationRemarks;
    }

    public void setDeliverySetMakingAssociationRemarks(String deliverySetMakingAssociationRemarks) {
        this.deliverySetMakingAssociationRemarks = deliverySetMakingAssociationRemarks;
    }

    public String getDeliverySetThinkingLevelScore() {
        return deliverySetThinkingLevelScore;
    }

    public void setDeliverySetThinkingLevelScore(String deliverySetThinkingLevelScore) {
        this.deliverySetThinkingLevelScore = deliverySetThinkingLevelScore;
    }

    public String getDeliverySetThinkingLevelRemarks() {
        return deliverySetThinkingLevelRemarks;
    }

    public void setDeliverySetThinkingLevelRemarks(String deliverySetThinkingLevelRemarks) {
        this.deliverySetThinkingLevelRemarks = deliverySetThinkingLevelRemarks;
    }

    public String getDeliverySetInteractionStudentScore() {
        return deliverySetInteractionStudentScore;
    }

    public void setDeliverySetInteractionStudentScore(String deliverySetInteractionStudentScore) {
        this.deliverySetInteractionStudentScore = deliverySetInteractionStudentScore;
    }

    public String getDeliverySetInteractionStudentRemarks() {
        return deliverySetInteractionStudentRemarks;
    }

    public void setDeliverySetInteractionStudentRemarks(String deliverySetInteractionStudentRemarks) {
        this.deliverySetInteractionStudentRemarks = deliverySetInteractionStudentRemarks;
    }

    public String getDeliverySetAppropriateLevelScore() {
        return deliverySetAppropriateLevelScore;
    }

    public void setDeliverySetAppropriateLevelScore(String deliverySetAppropriateLevelScore) {
        this.deliverySetAppropriateLevelScore = deliverySetAppropriateLevelScore;
    }

    public String getDeliverySetAppropriateLevelRemarks() {
        return deliverySetAppropriateLevelRemarks;
    }

    public void setDeliverySetAppropriateLevelRemarks(String deliverySetAppropriateLevelRemarks) {
        this.deliverySetAppropriateLevelRemarks = deliverySetAppropriateLevelRemarks;
    }

    public String getDeliverySetProperLanguageScore() {
        return deliverySetProperLanguageScore;
    }

    public void setDeliverySetProperLanguageScore(String deliverySetProperLanguageScore) {
        this.deliverySetProperLanguageScore = deliverySetProperLanguageScore;
    }

    public String getDeliverySetProperLanguageRemarks() {
        return deliverySetProperLanguageRemarks;
    }

    public void setDeliverySetProperLanguageRemarks(String deliverySetProperLanguageRemarks) {
        this.deliverySetProperLanguageRemarks = deliverySetProperLanguageRemarks;
    }

    public String getDeliverySetPronounciationScore() {
        return deliverySetPronounciationScore;
    }

    public void setDeliverySetPronounciationScore(String deliverySetPronounciationScore) {
        this.deliverySetPronounciationScore = deliverySetPronounciationScore;
    }

    public String getDeliverySetPronounciationRemarks() {
        return deliverySetPronounciationRemarks;
    }

    public void setDeliverySetPronounciationRemarks(String deliverySetPronounciationRemarks) {
        this.deliverySetPronounciationRemarks = deliverySetPronounciationRemarks;
    }

    public String getDeliverySetStudentConfidenceScore() {
        return deliverySetStudentConfidenceScore;
    }

    public void setDeliverySetStudentConfidenceScore(String deliverySetStudentConfidenceScore) {
        this.deliverySetStudentConfidenceScore = deliverySetStudentConfidenceScore;
    }

    public String getDeliverySetStudentConfidenceRemarks() {
        return deliverySetStudentConfidenceRemarks;
    }

    public void setDeliverySetStudentConfidenceRemarks(String deliverySetStudentConfidenceRemarks) {
        this.deliverySetStudentConfidenceRemarks = deliverySetStudentConfidenceRemarks;
    }

    public String getDeliverySetLearningStylesScore() {
        return deliverySetLearningStylesScore;
    }

    public void setDeliverySetLearningStylesScore(String deliverySetLearningStylesScore) {
        this.deliverySetLearningStylesScore = deliverySetLearningStylesScore;
    }

    public String getDeliverySetLearningStylesRemarks() {
        return deliverySetLearningStylesRemarks;
    }

    public void setDeliverySetLearningStylesRemarks(String deliverySetLearningStylesRemarks) {
        this.deliverySetLearningStylesRemarks = deliverySetLearningStylesRemarks;
    }

    public String getDeliverySetSupervisingClassworkScore() {
        return deliverySetSupervisingClassworkScore;
    }

    public void setDeliverySetSupervisingClassworkScore(String deliverySetSupervisingClassworkScore) {
        this.deliverySetSupervisingClassworkScore = deliverySetSupervisingClassworkScore;
    }

    public String getDeliverySetSupervisingClassworkRemarks() {
        return deliverySetSupervisingClassworkRemarks;
    }

    public void setDeliverySetSupervisingClassworkRemarks(String deliverySetSupervisingClassworkRemarks) {
        this.deliverySetSupervisingClassworkRemarks = deliverySetSupervisingClassworkRemarks;
    }

    public String getDeliverySetClassroomManagementScore() {
        return deliverySetClassroomManagementScore;
    }

    public void setDeliverySetClassroomManagementScore(String deliverySetClassroomManagementScore) {
        this.deliverySetClassroomManagementScore = deliverySetClassroomManagementScore;
    }

    public String getDeliverySetClassroomManagementRemarks() {
        return deliverySetClassroomManagementRemarks;
    }

    public void setDeliverySetClassroomManagementRemarks(String deliverySetClassroomManagementRemarks) {
        this.deliverySetClassroomManagementRemarks = deliverySetClassroomManagementRemarks;
    }

    public String getDeliverySetStudentManagementScore() {
        return deliverySetStudentManagementScore;
    }

    public void setDeliverySetStudentManagementScore(String deliverySetStudentManagementScore) {
        this.deliverySetStudentManagementScore = deliverySetStudentManagementScore;
    }

    public String getDeliverySetStudentManagementRemarks() {
        return deliverySetStudentManagementRemarks;
    }

    public void setDeliverySetStudentManagementRemarks(String deliverySetStudentManagementRemarks) {
        this.deliverySetStudentManagementRemarks = deliverySetStudentManagementRemarks;
    }

    public String getLessonConclusionLessonPlanScore() {
        return lessonConclusionLessonPlanScore;
    }

    public void setLessonConclusionLessonPlanScore(String lessonConclusionLessonPlanScore) {
        this.lessonConclusionLessonPlanScore = lessonConclusionLessonPlanScore;
    }

    public String getLessonConclusionLessonPlanRemarks() {
        return lessonConclusionLessonPlanRemarks;
    }

    public void setLessonConclusionLessonPlanRemarks(String lessonConclusionLessonPlanRemarks) {
        this.lessonConclusionLessonPlanRemarks = lessonConclusionLessonPlanRemarks;
    }

    public String getLessonConclusionStudentAchievementScore() {
        return lessonConclusionStudentAchievementScore;
    }

    public void setLessonConclusionStudentAchievementScore(String lessonConclusionStudentAchievementScore) {
        this.lessonConclusionStudentAchievementScore = lessonConclusionStudentAchievementScore;
    }

    public String getLessonConclusionStudentAchievementRemarks() {
        return lessonConclusionStudentAchievementRemarks;
    }

    public void setLessonConclusionStudentAchievementRemarks(String lessonConclusionStudentAchievementRemarks) {
        this.lessonConclusionStudentAchievementRemarks = lessonConclusionStudentAchievementRemarks;
    }

    public String getLessonConclusionNextLessonScore() {
        return lessonConclusionNextLessonScore;
    }

    public void setLessonConclusionNextLessonScore(String lessonConclusionNextLessonScore) {
        this.lessonConclusionNextLessonScore = lessonConclusionNextLessonScore;
    }

    public String getLessonConclusionNextLessonRemarks() {
        return lessonConclusionNextLessonRemarks;
    }

    public void setLessonConclusionNextLessonRemarks(String lessonConclusionNextLessonRemarks) {
        this.lessonConclusionNextLessonRemarks = lessonConclusionNextLessonRemarks;
    }

    public String getAdditionalRemarks() {
        return additionalRemarks;
    }

    public void setAdditionalRemarks(String additionalRemarks) {
        this.additionalRemarks = additionalRemarks;
    }

    public String getObservationReport() {
        return observationReport;
    }

    public void setObservationReport(String observationReport) {
        this.observationReport = observationReport;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNoAttempt() {
        return noAttempt;
    }

    public void setNoAttempt(String noAttempt) {
        this.noAttempt = noAttempt;
    }

    public String getBelowExpectation() {
        return belowExpectation;
    }

    public void setBelowExpectation(String belowExpectation) {
        this.belowExpectation = belowExpectation;
    }

    public String getMinReq() {
        return minReq;
    }

    public void setMinReq(String minReq) {
        this.minReq = minReq;
    }

    public String getGoodAttempt() {
        return goodAttempt;
    }

    public void setGoodAttempt(String goodAttempt) {
        this.goodAttempt = goodAttempt;
    }

    public String getWellDone() {
        return wellDone;
    }

    public void setWellDone(String wellDone) {
        this.wellDone = wellDone;
    }

    public String getHrId() {
        return hrId;
    }

    public void setHrId(String hrId) {
        this.hrId = hrId;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getSalaryoffered() {
        return salaryoffered;
    }

    public void setSalaryoffered(String salaryoffered) {
        this.salaryoffered = salaryoffered;
    }

    public Date getReportingDate() {
        return reportingDate;
    }

    public void setReportingDate(Date reportingDate) {
        this.reportingDate = reportingDate;
    }
}
