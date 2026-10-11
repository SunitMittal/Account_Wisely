import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import Container from "../components/Layout/Container";

const Privacy = () => {
  return (
    <Container>
      <div className="p-5 md:px-7 py-8 md:py-16">
        <h3 className="text-3xl md:text-4xl font-bold mb-3">Privacy Policy</h3>
        <p className="px-1 md:px-3 text-lg leading-7 text-gray-600">
          We value your privacy and are committed to protecting your personal
          information. Please read this Privacy Policy carefully to understand
          our information collection, usage, and sharing practices. By visiting
          this Website, you agree to the terms and conditions outlined in this
          Privacy Policy. If you do not agree, please refrain from using our
          Website.
        </p>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            1. Who we are and the law that applies
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              Account Wisely is a brand of A N P M & CO LLP, an Indian limited
              liability partnership with LLPIN AAL-3786. In this policy,
              "Account Wisely", "we", "us" and "our" refer to A N P M & CO LLP.
            </p>

            <p className="py-1">
              Registered office:{" "}
              <span className="font-semibold">
                Office No. 1117-A, 11th Floor, HubTown Viva, Western Express
                Highway, Jogeshwari East, Mumbai, Maharashtra 400060, India
              </span>
            </p>

            <p>
              Other office:{" "}
              <span className="font-semibold">
                BLA Business Park, Office No. 902-903, 9th Floor, Sonawala Lane,
                Goregaon East, Mumbai, Maharashtra 400063, India
              </span>
            </p>

            <p className="md:flex md:gap-2 py-1">
              Privacy contact:
              <p className=" flex gap-1 items-center">
              <RiMailSendLine className="h-5 w-5" />
              <a
                className="font-semibold"
                href="mailto:info@accountwisely.com"
                >
                info@accountwisely.com
              </a>
              </p>
            </p>

            <p>
              We handle personal data in accordance with applicable Indian law,
              including the Information Technology Act, 2000 and the Information
              Technology (Reasonable Security Practices and Procedures and
              Sensitive Personal Data or Information) Rules, 2011 (“SPDI
              Rules”), to the extent applicable.
            </p>

            <p className="pt-1">
              The Digital Personal Data Protection Act, 2023 and the Digital
              Personal Data Protection Rules, 2025 are being brought into force
              in phases. As at the last-updated date of this policy, their main
              processing obligations and individual-rights provisions have not
              yet commenced. We will apply each requirement from its notified
              commencement date. References below to statutory DPDP rights,
              Board reporting and prescribed retention requirements apply when
              the relevant provisions are in force and applicable to the
              processing concerned. Our privacy commitments in this policy apply
              from publication.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">2. Scope of this policy</h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              This policy explains how we collect, use, share, protect and
              retain personal data, and how you can contact us or exercise
              available rights. It covers website visitors; prospective clients;
              clients and their representatives; people whose information is
              provided for client assignments; and job applicants.
            </p>

            <p className="py-1">
              It applies to personal data handled through accountwisely.com,
              enquiries, consultation bookings, email, telephone, WhatsApp,
              recruitment and our professional services. Corporate information
              that does not relate to an identifiable individual is protected
              under applicable confidentiality and engagement terms, even where
              it is outside personal-data legislation.
            </p>

            <p>
              An engagement letter or data-processing agreement may specify
              additional arrangements for an assignment. Those arrangements
              operate subject to applicable law and cannot exclude mandatory
              rights or obligations. This policy does not govern another
              organization's independent collection or use of information.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            3. Information we collect and its sources
          </h4>
          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <ul className="px-2 md:px-4 list-disc">
              <li>
                Enquiries and consultations: name, email address, mobile number,
                city and state, accounting arrangements, services sought,
                approximate business-sales range, booking details and
                information included in messages or consultation notes.{" "}
              </li>
              <li>
                Recruitment: contact details, CV, qualifications, employment
                history and other information you provide in an application.
              </li>
              <li>
                Client assignments: books of account, bank statements, invoices,
                tax and GST records, PAN and necessary identity details, payroll
                and employee information, payment information, and relevant
                director, customer or vendor records.
              </li>
              <li>
                Authorised system access: account identifiers, permissions and,
                where necessary for the agreed work, credentials for accounting
                software or government portals.
              </li>
              <li>
                Website technical information: IP address, browser and device
                information, pages viewed, referral information and online
                identifiers collected through website infrastructure and
                applicable Google or Meta tools.
              </li>
              <li>
                Billing and payments: billing contacts, invoice details,
                transaction references, payment status and reconciliation
                information. Payment providers process payment information under
                their own applicable terms
              </li>
            </ul>

            <p className="py-1">
              We receive information directly from you, from clients and their
              authorized representatives, and from systems or providers used for
              the agreed service. We limit collection to information needed for
              the stated purpose. Please do not submit passwords, full Aadhaar
              numbers or bank details through general website enquiry forms. We
              provide an appropriate secure channel when such information is
              necessary.
            </p>

            <p>
              Providing information is generally voluntary. If information
              necessary for an enquiry, application or service is withheld, we
              may be unable to proceed. Unnecessary identity-document fields
              should be masked where the relevant filing or legal requirement
              permits.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">4. Why we use personal data</h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <ul className="px-2 md:px-4 list-disc">
              <li>
                To answer enquiries, assess service requirements and arrange
                consultations
              </li>

              <li>
                Recruitment: contact details, CV, qualifications, employment
                history and other information you provide in an application.
              </li>

              <li>
                Client assignments: books of account, bank statements, invoices,
                tax and GST records, PAN and necessary identity details, payroll
                and employee information, payment information, and relevant
                director, customer or vendor records.
              </li>

              <li>
                To provide agreed accounting, bookkeeping, tax, GST, payroll,
                virtual CFO, audit, financial analysis and advisory services.
              </li>

              <li>
                To communicate about assignments, send invoices and service
                notices, reconcile payments and manage the client relationship.
              </li>

              <li>
                To consider job applications and communicate with applicants.
              </li>

              <li>
                To operate and secure the website and our systems, investigate
                misuse, and understand website and advertising-campaign
                performance through applicable technical tools.
              </li>

              <li>
                To maintain required professional and statutory records, make
                authorized filings, respond to lawful requests, and establish or
                defend legal claims where permitted by law.
              </li>
            </ul>

            <p className="pt-1">
              We do not use confidential client engagement records for unrelated
              promotions or to create advertising audiences. A new processing
              purpose will be notified and supported by any permission or legal
              ground required before that use begins.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            5. Consent and other permitted grounds
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              We obtain consent where applicable law requires it, including for
              relevant direct collection and disclosure of sensitive personal
              data. Electronic consent may be used where legally permitted.
              Where we rely on consent, we explain the relevant data, purpose
              and available choices and seek a clear affirmative action.
              Visiting the website or reading this policy is not blanket
              consent.
            </p>

            <p className="py-1">
              Once the relevant DPDP provisions commence, processing will rely
              on consent or an applicable “certain legitimate use” under that
              Act. For example, information voluntarily provided to answer a
              requested enquiry may be used for that specified purpose where the
              statutory conditions are met. Legally required disclosures or
              compliance with court orders will be assessed under the relevant
              provisions. An engagement contract documents the service and
              instructions; it is not, by itself, a separate DPDP processing
              ground.
            </p>

            <p>
              Where a client determines the purpose and means of processing, we
              act under its lawful documented instructions and the applicable
              contractual and statutory framework. Requirements may differ
              between direct collection from an individual and processing under
              a contract with a client organization
            </p>

            <p className="pt-1">
              You can withdraw consent by emailing info@accountwisely.com with
              the subject “Consent withdrawal”, or through the relevant
              collection channel where that option is available. We will help
              you use a withdrawal method of comparable ease to giving consent.
              Withdrawal does not invalidate prior lawful processing. It may
              affect services that depend on the information, but does not
              prevent processing that remains required or authorized by law.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            6. Our role in client assignments
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              Our role depends on the purpose and means of each processing
              activity. For our own enquiries, recruitment, billing,
              relationship administration and independently determined
              professional or statutory activities, we act as the responsible
              organization and, where applicable, as a Data Fiduciary.
            </p>

            <p className="py-1">
              For routine work carried out solely on a client’s documented
              instructions, such as specified payroll processing or bookkeeping
              operations, we may act as a Data Processor. The client is
              responsible for the lawful basis, notices and permissions needed
              for that processing and for providing the information to us.
            </p>

            <p>
              Professional judgement, audit evidence, working papers, legal
              duties and permitted claim-related records may involve purposes
              determined independently by us. Receiving information from a
              client does not make every use of it processor activity.
              Engagement terms will identify service-specific responsibilities
              where needed.
            </p>

            <p className="pt-1">
              We maintain confidentiality in accordance with our professional
              duties and contractual commitments. We do not treat this policy as
              permission to use client-provided information beyond the agreed or
              otherwise lawful purposes.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">7. Who may receive information</h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <ul className="px-2 md:px-4 list-disc">
              <li>
                Authorized personnel and service contractors: staff and approved
                contractors who need access for the agreed work, subject to
                confidentiality and access restrictions.
              </li>

              <li>
                Technology providers: website hosting, communications, storage
                and scheduling providers, including Vercel, Google Workspace and
                Google Drive, Zoho Bookings and WhatsApp, as relevant to the
                interaction or service.
              </li>

              <li>
                Accounting and payroll platforms: systems used for an
                assignment, which may include Tally, Zoho Books, QuickBooks,
                Xero or other platforms selected for the engagement.
              </li>

              <li>
                Payment providers: providers such as Cash free used for payment
                links, collection processing and transaction reconciliation.
              </li>

              <li>
                Website measurement and advertising platforms: Google and Meta,
                where their tools receive website technical information, subject
                to applicable law and required permissions. Confidential
                engagement documents are not supplied for advertising
                measurement.
              </li>

              <li>
                Approved automation or AI providers: where used for an
                authorized assignment, limited information needed for the
                relevant task, under appropriate confidentiality, security and
                processing terms and any required client approval or consent.
              </li>

              <li>
                Government bodies and portals: GST Network, the Income Tax
                Department, EPFO, ESIC, the Ministry of Corporate Affairs and
                other relevant authorities for authorized filings or legal
                compliance.
              </li>

              <li>
                Professional advisers and lawful authorities: lawyers, auditors,
                insurers, courts, regulators or law-enforcement bodies where
                access is necessary and legally permitted or required.
              </li>

              <li>
                A permitted successor: where a business transfer or
                restructuring involves information, subject to applicable
                confidentiality, notice and legal requirements.
              </li>
            </ul>

            <p className="py-1">
              We limit disclosure to what is necessary for the purpose.
              Providers processing on our behalf are subject to appropriate
              contractual safeguards. Some platforms, payment providers and
              authorities also process information independently under their own
              terms or legal duties; their role is assessed separately.
            </p>

            <p>
              We do not sell personal data. We do not permit providers acting on
              our instructions to use confidential engagement data for unrelated
              advertising or general AI-model training. Before using AI for
              identifiable client information, we assess the tool’s data
              handling and apply the relevant engagement permissions and
              safeguards.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">8. Security Precautions</h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              Our operations are based in India. Some service providers may
              store, access or process information in other countries, including
              the United States. The location depends on the provider, product
              and account configuration. We do not represent that all
              information remains in India.
            </p>

            <p className="py-1">
              Where the SPDI Rules apply, transfers of sensitive personal data
              must meet their protection and contractual-necessity or consent
              conditions. When applicable DPDP transfer provisions commence, we
              will also observe Government restrictions, prescribed conditions
              and any stricter sector-specific requirements. A provider’s
              general security statements do not replace the required transfer
              safeguards.
            </p>

            <p>
              For client-controlled processing, we follow lawful location and
              transfer instructions agreed for the assignment. Statutory
              requirements for particular records, including relevant ICT logs,
              are addressed separately.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            9. Security and access to client systems
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              We use reasonable technical and organizational safeguards
              appropriate to the information and service. These include
              two-factor authentication on email and file-storage accounts,
              encrypted client-file storage, access restricted by role and
              assignment, staff confidentiality agreements, secure sharing
              channels and prompt removal of access when staff leave or an
              engagement ends.
            </p>

            <p className="py-1">
              Access to accounting software and government portals is used only
              for authorized work. We prefer authorized or delegated access
              where available. Credentials are shared through the agreed secure
              channel and access is withdrawn when it is no longer authorized.
              Clients should revoke permissions and change any shared passwords
              at the end of an engagement.
            </p>

            <p>
              We maintain documented security procedures and review relevant
              access and safeguards. No system or transmission method can
              guarantee absolute security. We address incidents through the
              response process below.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">10. Retention and deletion</h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              We retain information for the period justified by the service,
              applicable statutory and professional requirements, and any lawful
              need to address a dispute, assessment or claim. Different record
              categories have different retention triggers. The retention period
              of a client’s statutory books does not automatically require us to
              retain every duplicate file or personal data field.
            </p>

            <ul className="py-1 px-2 md:px-4 list-disc">
              <li>
                Client books and statutory records: retained according to the
                obligations applicable to the record and the agreed allocation
                of responsibility. Company's books and vouchers generally
                involve at least eight preceding financial years; GST records
                generally involve 72 months from the annual-return due date,
                with extensions where legally required.
              </li>

              <li>
                Audit and professional working papers: retained under the
                professional standards applicable to the assignment. Audit
                documentation is ordinarily retained for at least seven years
                from the auditor’s report date or the later group auditor’s
                report date. Other assignment records are assessed separately.
              </li>

              <li>
                Our billing, tax and compliance records: retained for the
                periods required by the laws applicable to the firm and any
                ongoing proceedings.
              </li>

              <li>
                Unconverted enquiries: normally retained for up to two years
                from the last meaningful contact, unless earlier deletion is
                appropriate or a documented lawful reason requires longer
                retention.
              </li>

              <li>
                Unsuccessful job applications: normally retained for up to one
                year from the application date. Further retention for future
                opportunities requires an appropriate permission or other lawful
                justification. Successful applicants’ records follow the
                employment-record schedule.
              </li>

              <li>
                Messages and attachments: relevant email and WhatsApp material
                follows the enquiry or engagement category. Unnecessary
                duplicates are removed when no longer required.
              </li>

              <li>
                Credentials: access is revoked promptly when no longer
                authorized. Stored credentials are removed when no longer
                necessary, subject to applicable legal requirements; they are
                not treated as a routine long-term financial-record archive.
              </li>

              <li>
                Logs and processing records: relevant ICT logs are maintained
                securely in India for a rolling 180 days where required by
                CERT-In directions. Once applicable DPDP requirements commence,
                relevant personal data, associated traffic data and processing
                logs are retained for at least one year from processing for
                prescribed purposes, subject to further lawful retention
                requirements.
              </li>
            </ul>

            <p>
              For information held solely as a processor, return or deletion
              follows the agreed client instructions and mandatory legal
              requirements. We may retain separately justified professional or
              statutory records, with restricted access. We periodically review
              retention and remove or irreversibly anonymize information no
              longer required. Residual backup copies are restricted and removed
              through the applicable backup lifecycle; information subject to a
              lawful hold is preserved until the hold ends.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            11. Responding to a data incident
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              If we become aware of an incident affecting personal data, we
              investigate, take steps to contain it, preserve necessary evidence
              and assess required notifications. Where client-controlled
              information is involved, we notify the relevant client without
              undue delay and provide information needed for its response.
            </p>

            <p className="py-1">
              We report incidents covered by CERT-In directions within six hours
              of noticing them or being informed of them, as required by those
              directions.
            </p>

            <p>
              When the relevant DPDP breach provisions apply, we notify affected
              individuals and the Data Protection Board of India without delay
              as prescribed, and provide the Board’s detailed information within
              72 hours of awareness or a permitted extension. Other regulatory,
              contractual or overseas notifications are made where applicable.
              Communications explain the incident, likely consequences, response
              measures, protective steps and a contact for questions, to the
              extent known and legally permitted.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            12. Your requests and available rights
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              You may contact us to ask about your information, seek correction
              or updating, request deletion, withdraw consent, or raise a
              concern. Requests are assessed under applicable law, our role in
              the processing and any necessary retention obligation.
            </p>

            <p className="py-1">
              When the relevant DPDP rights commence and apply, they include
              access to the prescribed summary and sharing information,
              correction, completion, updating and erasure, grievance redressal,
              and nomination of another individual to exercise rights in the
              event of death or incapacity. Statutory exceptions and conditions
              continue to apply.
            </p>

            <p>
              Email info@accountwisely.com with the subject “Privacy request”.
              Describe the information or interaction and the action requested.
              We may seek proportionate verification of identity or authority;
              please do not send unnecessary identity documents. We aim to
              acknowledge requests within seven days and address them promptly
              within applicable statutory periods. If we cannot grant a request
              fully, we explain the reason and any available next step, where
              legally permitted.
            </p>

            <p className="pt-1">
              Where we hold the information solely on behalf of a client, we
              will direct or pass the request to that client and assist its
              response. We remain responsible for addressing any separate
              processing for which we determine the purpose and means. You may
              request the applicable nomination procedure through the same
              privacy contact.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">13. Grievance officer</h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              <p>Mr. Mukut Mittal</p>
              <p>Officer In-charge, Grievances</p>
              <p>A N P M & CO LLP — Account Wisely </p>
              <p>
                Office No. 1117-A, 11th Floor, HubTown Viva, Western Express
                Highway, Jogeshwari East, Mumbai, Maharashtra 400060, India
              </p>
              <p>Email: info@accountwisely.com</p>
              <p>Suggested email subject: Privacy grievance</p>
            </p>

            <p className="py-1">
              We aim to acknowledge grievances within seven days and resolve
              them within 30 days. We comply with any shorter applicable
              statutory period, including the requirement to act expeditiously
              within one month where the SPDI grievance requirement applies.
              This contact does not restrict any available legal remedy.
            </p>

            <p>
              Where the relevant DPDP complaint provisions are in force and
              apply, you may approach the Data Protection Board of India after
              exhausting the grievance-redressal opportunity required by that
              Act. Other competent authorities may be approached where their
              jurisdiction applies.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            14. Children and information requiring additional care
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              Our website and direct services are intended for adults. We do not
              knowingly solicit personal data directly from children. If you
              believe a child has provided information, contact our privacy
              officer so we can assess it and take appropriate action.
            </p>

            <p className="pt-1">
              Client records may legitimately include a child’s or dependent's
              information. We limit handling to the authorized service. The
              responsible client must arrange any required parental or
              lawful-guardian consent or applicable exemption; instructions
              alone do not remove statutory requirements. Where we determine the
              processing ourselves, we address those requirements directly.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            15. Overseas enquiries and future engagements
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              We may receive enquiries from individuals or businesses outside
              India. Any additional privacy rights and duties depend on the law
              applicable to the particular processing, including
              territorial-scope and targeting requirements. The location of a
              prospective client alone does not determine every obligation.
            </p>

            <p className="py-1">
              Before receiving personal data for an overseas assignment
              requiring additional protections, we put in place the applicable
              engagement and data-processing arrangements and any required
              international-transfer safeguards. These may include EU Standard
              Contractual Clauses or the UK International Data Transfer
              Agreement or Addendum, with any required assessments and
              supplementary measures.
            </p>

            <p>
              Where UK or EU data-protection law applies, we provide the
              relevant information about our role, processing grounds,
              retention, transfers and additional rights. These can include
              restriction, objection and portability, subject to their legal
              conditions, and complaints to the competent supervisory authority.
              Any required representative or additional contact details will be
              provided for the applicable activity. Signing an overseas
              engagement does not replace necessary statutory notices or
              safeguards.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            16. Other websites and communication platforms
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              Links or interactions may take you to WhatsApp, Google Maps,
              booking services, payment providers or other platforms. Their
              privacy policies govern information they collect independently.
              Our responsibility for information we receive and process
              continues under this policy and applicable law.
            </p>

            <p className="pt-1">
              Security within a messaging platform does not remove risks at
              endpoints, in backups or when another provider processes a
              message. Use the agreed secure channel for sensitive client
              documents and credentials.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            17. Changes and language access
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              We may update this policy when our services, data practices or
              applicable law change. The current version and its last-updated
              date will be displayed on our website. Material changes will be
              communicated through an appropriate website notice or direct
              communication. A policy update is not retrospective consent to a
              new purpose; fresh consent will be obtained where required.
            </p>

            <p className="pt-1">
              To request help understanding this policy, contact
              info@accountwisely.com. Where required by applicable DPDP
              provisions, you will have the option to access notices and consent
              requests in English or any language specified in the Eighth
              Schedule to the Constitution of India.
            </p>
          </div>
        </div>

        <div className="md:px-3 p-2">
          <h4 className="text-2xl font-semibold">
            18. Governing law and statutory remedies
          </h4>

          <div className="p-1 md:px-6 text-lg leading-7 text-gray-600">
            <p>
              This policy is governed by Indian law, subject to any other
              mandatory law applicable to the processing. For ordinary civil
              disputes within their competence, courts in Mumbai, Maharashtra
              have jurisdiction subject to applicable law and valid engagement
              terms. Nothing in this policy excludes the jurisdiction of a
              statutory authority or tribunal, or limits mandatory privacy,
              consumer or other legal rights.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Privacy;
