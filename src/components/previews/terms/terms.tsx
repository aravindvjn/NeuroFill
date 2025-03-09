"use client";

import { PolicyDataType } from "@/components/forms/terms-form/type";
import React from "react";

const TermsPreview = ({
  childrensPrivacy,
  compliance,
  contactEmail,
  dataCollection,
  dataSecurity,
  dataSharing,
  dataUsage,
  effectiveDate,
  introduction,
  policyUpdates,
  title,
  userRights,
}: PolicyDataType) => {


  return (
      <div id="medium" className="max-w-3xl print-only w-full p-6">
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          Effective Date: {effectiveDate}
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p>{introduction}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Collection</h2>
          <p>{dataCollection.purposeOfCollection}</p>
          <ul className="list-disc ml-6">
            {dataCollection.typesOfDataCollected.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Usage</h2>
          <p>{dataUsage.howDataIsUsed}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
          <p>{dataSharing.thirdPartyServices}</p>
          <p>{dataSharing.sharingPractices}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Security</h2>
          <p>{dataSecurity.securityMeasures}</p>
          <p>{dataSecurity.dataRetention}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">User Rights</h2>
          <p>{userRights.userRightsDetails}</p>
          <p>{userRights.exerciseRights}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Children&apos;s Privacy</h2>
          <p>{childrensPrivacy.childrensPrivacyDetails}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Compliance</h2>
          <p>{compliance.regulatoryCompliance}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Policy Updates</h2>
          <p>{policyUpdates.policyUpdateProcess}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>
            If you have any questions, contact us at{" "}
            <a href={`mailto:${contactEmail}`} className="text-blue-600">
              {contactEmail}
            </a>
          </p>
        </section>
      </div>
  );
};

export default TermsPreview;
