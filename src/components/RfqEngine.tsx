import React, { useState, useEffect, useRef } from 'react';
import { 
  Upload, 
  ArrowRight, 
  ArrowLeft, 
  X,
  Mail,
  MessageCircle,
  Check
} from 'lucide-react';
import { MATERIAL_GRADES, COMPANY_INFO } from '../data/siteContent';

interface RfqEngineProps {
  initialGrade?: string;
  initialComponent?: string;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const RfqEngine: React.FC<RfqEngineProps> = ({ 
  initialGrade = '', 
  initialComponent = '',
  isOpenModal = false,
  onCloseModal
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [rfqNumber, setRfqNumber] = useState<string>('');

  // Form State
  const [partName, setPartName] = useState<string>(initialComponent);
  const [materialGrade, setMaterialGrade] = useState<string>(initialGrade || 'ASTM A536 65-45-12 (SG 400/15)');
  const [estimatedWeight, setEstimatedWeight] = useState<string>('5.0');
  const [machiningRequired, setMachiningRequired] = useState<'Fully CNC Machined' | 'As-Cast Only'>('Fully CNC Machined');
  const [annualQuantity, setAnnualQuantity] = useState<string>('2,500 pcs / year');
  const [targetDate, setTargetDate] = useState<string>('Within 30 Days');
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; size: string }[]>([]);
  const [dragActive, setDragActive] = useState<boolean>(false);

  // Contact Info
  const [clientName, setClientName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [workEmail, setWorkEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialGrade) setMaterialGrade(initialGrade);
    if (initialComponent) setPartName(initialComponent);
  }, [initialGrade, initialComponent]);

  const handleFiles = (files: FileList | File[]) => {
    const newFiles = Array.from(files).map(f => ({
      name: f.name,
      size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`
    }));
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setUploadedFiles(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRfq = `RFQ-2026-UF-${Math.floor(1000 + Math.random() * 9000)}`;
    setRfqNumber(generatedRfq);
    setSubmitted(true);
  };

  const inputClasses = "w-full bg-[#FAFAF7] border border-[#E8E4DF] rounded-lg px-3.5 py-2.5 text-sm text-[#2D2D2D] placeholder:text-[#6B6560]/50 focus:outline-none focus:border-[#9B6B4A] focus:bg-white transition-colors font-['DM_Sans',sans-serif]";
  const selectClasses = "w-full bg-[#FAFAF7] border border-[#E8E4DF] rounded-lg px-3.5 py-2.5 text-sm text-[#2D2D2D] focus:outline-none focus:border-[#9B6B4A] focus:bg-white transition-colors font-['DM_Sans',sans-serif]";
  const labelClasses = "block text-xs font-medium text-[#2D2D2D] mb-1.5 font-['DM_Sans',sans-serif]";

  const contactShortcuts = (
    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
      <a
        href={`mailto:${COMPANY_INFO.rfqEmail}`}
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F3F0EB] hover:bg-[#E8E4DF] text-[#2D2D2D] border border-[#E8E4DF] text-xs sm:text-sm font-medium transition-colors font-['DM_Sans',sans-serif]"
      >
        <Mail className="w-4 h-4" />
        Email drawings
      </a>
      <a
        href={COMPANY_INFO.whatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-[#FAFAF7] text-[#2D2D2D] border border-[#E8E4DF] text-xs sm:text-sm font-medium transition-colors font-['DM_Sans',sans-serif]"
      >
        <MessageCircle className="w-4 h-4 text-[#9B6B4A]" />
        WhatsApp us
      </a>
      <span className="text-xs text-[#6B6560] font-['DM_Sans',sans-serif]">
        Need help choosing a material? Start with our material matrix and we will guide you.
      </span>
    </div>
  );

  const formInner = (
    <div>
      {/* Progress Line and Step Labels */}
      {!submitted && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs text-[#6B6560] mb-2 font-['DM_Sans',sans-serif]">
            <span className="font-medium text-[#2D2D2D]">
              Step {step} of 4
            </span>
            <span className="font-['JetBrains_Mono',monospace] text-[11px] text-[#6B6560]">
              Direct: {COMPANY_INFO.rfqEmail}
            </span>
          </div>

          {/* Thin Copper Progress Bar */}
          <div className="w-full bg-[#F3F0EB] h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-[#9B6B4A] h-full transition-all duration-300 rounded-full"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>

          {/* Step Labels Below */}
          <div className="grid grid-cols-4 gap-2 text-xs mt-3 text-center font-['DM_Sans',sans-serif]">
            <span className={step >= 1 ? 'text-[#2D2D2D] font-medium' : 'text-[#6B6560]/60'}>
              1. Specifications
            </span>
            <span className={step >= 2 ? 'text-[#2D2D2D] font-medium' : 'text-[#6B6560]/60'}>
              2. Volume &amp; Schedule
            </span>
            <span className={step >= 3 ? 'text-[#2D2D2D] font-medium' : 'text-[#6B6560]/60'}>
              3. CAD Upload
            </span>
            <span className={step >= 4 ? 'text-[#2D2D2D] font-medium' : 'text-[#6B6560]/60'}>
              4. Contact
            </span>
          </div>

          {contactShortcuts}
        </div>
      )}

      {/* Submitted Confirmation View */}
      {submitted ? (
        <div className="text-center py-10 sm:py-14 space-y-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#5A8A6C]/10 border border-[#5A8A6C]/25 flex items-center justify-center text-[#5A8A6C]">
            <Check className="w-7 h-7 stroke-[2.2]" />
          </div>

          <div className="space-y-2">
            <h3 className="font-['Abel',sans-serif] text-2xl sm:text-3xl text-[#2D2D2D] font-normal">
              Quotation Request Received
            </h3>
            <p className="text-sm text-[#6B6560] max-w-md mx-auto leading-relaxed font-['DM_Sans',sans-serif]">
              Your inquiry has been assigned reference ID <span className="font-['JetBrains_Mono',monospace] font-semibold text-[#2D2D2D]">{rfqNumber}</span>. Our technical estimators will review your drawings and respond within 24 hours.
            </p>
          </div>

          <div className="bg-[#FAFAF7] p-5 rounded-xl border border-[#E8E4DF] max-w-sm mx-auto text-xs text-[#6B6560] space-y-2 text-left font-['JetBrains_Mono',monospace]">
            <div className="flex justify-between">
              <span>Company:</span>
              <span className="text-[#2D2D2D] font-medium">{companyName || 'Not specified'}</span>
            </div>
            <div className="flex justify-between">
              <span>Part:</span>
              <span className="text-[#2D2D2D] font-medium">{partName || 'Component'}</span>
            </div>
            <div className="flex justify-between">
              <span>Material:</span>
              <span className="text-[#9B6B4A] font-medium">{materialGrade}</span>
            </div>
            <div className="flex justify-between">
              <span>Scope:</span>
              <span className="text-[#2D2D2D] font-medium">{machiningRequired}</span>
            </div>
            <div className="flex justify-between">
              <span>Files:</span>
              <span className="text-[#5A8A6C] font-medium">
                {uploadedFiles.length > 0 ? `${uploadedFiles.length} file(s)` : 'None attached'}
              </span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setUploadedFiles([]);
              }}
              className="px-5 py-2.5 rounded-lg bg-[#F3F0EB] hover:bg-[#E8E4DF] text-[#2D2D2D] border border-[#E8E4DF] text-xs sm:text-sm font-medium transition-colors cursor-pointer font-['DM_Sans',sans-serif]"
            >
              Submit Another
            </button>
            {onCloseModal && (
              <button
                type="button"
                onClick={onCloseModal}
                className="px-5 py-2.5 rounded-lg bg-[#9B6B4A] hover:bg-[#8B5E3F] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer font-['DM_Sans',sans-serif]"
              >
                Close
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* STEP 1: Specs & Grade */}
          {step === 1 && (
            <div className="space-y-5">
              <h3 className="font-['Abel',sans-serif] text-xl sm:text-2xl text-[#2D2D2D] font-normal">
                Component Specifications &amp; Metallurgy
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Component Name / Description</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tractor Axle Hub / Hydraulic Valve Body"
                    value={partName}
                    onChange={(e) => setPartName(e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Target Material Metallurgy</label>
                  <select
                    value={materialGrade}
                    onChange={(e) => setMaterialGrade(e.target.value)}
                    className={selectClasses}
                  >
                    {MATERIAL_GRADES.map(g => (
                      <option key={g.id} value={`${g.astmGrade} (${g.isGrade})`}>
                        {g.type} — {g.astmGrade} ({g.isGrade} / {g.enGrade})
                      </option>
                    ))}
                    <option value="Other Custom Grade">Other Custom Metallurgy Specification</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Estimated Piece Weight (kg)</label>
                  <input
                    type="text"
                    placeholder="e.g. 5.0"
                    value={estimatedWeight}
                    onChange={(e) => setEstimatedWeight(e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Scope of Work</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setMachiningRequired('Fully CNC Machined')}
                      className={`py-2.5 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer font-['DM_Sans',sans-serif] ${
                        machiningRequired === 'Fully CNC Machined'
                          ? 'bg-[#F5EDE5] text-[#9B6B4A] border-[#9B6B4A]'
                          : 'bg-[#FAFAF7] text-[#6B6560] border-[#E8E4DF] hover:bg-white'
                      }`}
                    >
                      Fully CNC Machined
                    </button>
                    <button
                      type="button"
                      onClick={() => setMachiningRequired('As-Cast Only')}
                      className={`py-2.5 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer font-['DM_Sans',sans-serif] ${
                        machiningRequired === 'As-Cast Only'
                          ? 'bg-[#F5EDE5] text-[#9B6B4A] border-[#9B6B4A]'
                          : 'bg-[#FAFAF7] text-[#6B6560] border-[#E8E4DF] hover:bg-white'
                      }`}
                    >
                      As-Cast Only
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Volume & Delivery Schedule */}
          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-['Abel',sans-serif] text-xl sm:text-2xl text-[#2D2D2D] font-normal">
                Batch Size &amp; Delivery Schedule
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Estimated Annual Quantity</label>
                  <select
                    value={annualQuantity}
                    onChange={(e) => setAnnualQuantity(e.target.value)}
                    className={selectClasses}
                  >
                    <option value="500 to 1,000 pcs / year">500 to 1,000 pcs / year (Trial / Short Run)</option>
                    <option value="1,000 to 5,000 pcs / year">1,000 to 5,000 pcs / year (Medium Series)</option>
                    <option value="5,000 to 25,000 pcs / year">5,000 to 25,000 pcs / year (High Series)</option>
                    <option value="25,000+ pcs / year">25,000+ pcs / year (OEM Mass Production)</option>
                  </select>
                </div>

                <div>
                  <label className={labelClasses}>Target Delivery Lead Time</label>
                  <select
                    value={targetDate}
                    onChange={(e) => setTargetDate(e.target.value)}
                    className={selectClasses}
                  >
                    <option value="Urgent (Within 15 Days)">Urgent (Within 15 Days)</option>
                    <option value="Standard (Within 30 Days)">Standard (Within 30 Days)</option>
                    <option value="Scheduled Monthly Deliveries">Scheduled Monthly Deliveries</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#FAFAF7] p-4 rounded-lg border border-[#E8E4DF] text-xs text-[#6B6560] leading-relaxed">
                <span className="font-medium text-[#2D2D2D] block mb-0.5">Foundry capacity note</span>
                Our monthly melt capacity of 400+ tonnes supports both high-mix trial batches and high-volume OEM serial production.
              </div>
            </div>
          )}

          {/* STEP 3: CAD Drag & Drop Upload */}
          {step === 3 && (
            <div className="space-y-5">
              <h3 className="font-['Abel',sans-serif] text-xl sm:text-2xl text-[#2D2D2D] font-normal">
                CAD Drawings &amp; Technical Documentation
              </h3>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".step,.stp,.dwg,.dxf,.pdf,.zip,.iges,.igs"
                onChange={handleFileChange}
                className="hidden"
              />

              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 sm:p-10 text-center transition-colors ${
                  dragActive
                    ? 'border-[#9B6B4A] bg-[#F5EDE5]/50'
                    : 'border-[#E8E4DF] bg-[#FAFAF7] hover:border-[#C49A7C]'
                }`}
              >
                <div className="space-y-1.5 text-xs text-[#6B6560]">
                  <p className="text-sm font-medium text-[#2D2D2D]">
                    Drag &amp; drop 3D CAD or 2D technical drawings here
                  </p>
                  <p className="text-[#6B6560]">
                    Accepted formats: .STEP, .STP, .DWG, .DXF, .PDF, or .ZIP (up to 50 MB)
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#E8E4DF] text-xs font-medium text-[#2D2D2D] hover:bg-[#F3F0EB] transition-colors cursor-pointer shadow-xs font-['DM_Sans',sans-serif]"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#9B6B4A]" />
                    Browse Files
                  </button>
                </div>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-['JetBrains_Mono',monospace] text-[#6B6560] font-medium uppercase tracking-wider">
                    Attached Files ({uploadedFiles.length}):
                  </span>
                  <div className="space-y-1.5">
                    {uploadedFiles.map((file, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center justify-between bg-[#FAFAF7] px-3.5 py-2.5 rounded-lg border border-[#E8E4DF] text-xs font-['JetBrains_Mono',monospace]"
                      >
                        <span className="text-[#2D2D2D] truncate pr-3 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5A8A6C] shrink-0" />
                          {file.name}
                        </span>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-[#6B6560]">{file.size}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(idx)}
                            className="text-[#6B6560] hover:text-[#2D2D2D] transition-colors cursor-pointer"
                            aria-label={`Remove ${file.name}`}
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 4: Corporate Contact & Submit */}
          {step === 4 && (
            <div className="space-y-5">
              <h3 className="font-['Abel',sans-serif] text-xl sm:text-2xl text-[#2D2D2D] font-normal">
                Contact &amp; Company Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Company / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mahindra / Engineering OEM"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>Corporate Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className={labelClasses}>Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98960 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className={labelClasses}>Additional Technical Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Specify heat treatment, hydrostatic pressure testing, surface finish, CMM inspection, or special packaging..."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className={inputClasses}
                />
              </div>
            </div>
          )}

          {/* Navigation Wizard Buttons */}
          <div className="pt-6 border-t border-[#E8E4DF] flex items-center justify-between gap-4 font-['DM_Sans',sans-serif]">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(prev => prev - 1)}
                className="px-4 py-2.5 rounded-lg bg-[#F3F0EB] hover:bg-[#E8E4DF] text-[#2D2D2D] border border-[#E8E4DF] text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : <div />}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(prev => prev + 1)}
                className="px-5 py-2.5 rounded-lg bg-[#9B6B4A] hover:bg-[#8B5E3F] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5"
              >
                Continue
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#9B6B4A] hover:bg-[#8B5E3F] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-2"
              >
                Submit Request
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </form>
      )}
    </div>
  );

  // Modal Presentation
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D2D2D]/60 backdrop-blur-sm overflow-y-auto font-['DM_Sans',sans-serif]">
        <div className="max-w-3xl w-full relative my-8">
          <div className="bg-white rounded-xl border border-[#E8E4DF] p-6 sm:p-10 shadow-xl relative">
            {onCloseModal && (
              <button
                onClick={onCloseModal}
                className="absolute top-5 right-5 p-2 rounded-lg text-[#6B6560] hover:text-[#2D2D2D] hover:bg-[#F3F0EB] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            )}

            <div className="mb-8 text-left pr-8">
              <h2 className="font-['Abel',sans-serif] text-2xl sm:text-3xl text-[#2D2D2D] font-normal tracking-tight">
                Request a Quotation
              </h2>
              <p className="mt-1 text-sm text-[#6B6560]">
                Upload your CAD files and specifications. We respond within 24 hours.
              </p>
              {contactShortcuts}
            </div>

            {formInner}
          </div>
        </div>
      </div>
    );
  }

  // Standalone Section Presentation
  return (
    <section id="rfq" className="py-20 sm:py-28 bg-white border-t border-[#E8E4DF] relative font-['DM_Sans',sans-serif]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10 text-left">
          <h2 className="font-['Abel',sans-serif] text-3xl sm:text-4xl lg:text-[42px] leading-tight text-[#2D2D2D] font-normal tracking-tight">
            Request a Quotation
          </h2>
          <p className="mt-2 text-base text-[#6B6560]">
            Upload your CAD files and specifications. We respond within 24 hours.
          </p>
          {contactShortcuts}
        </div>

        {/* Clean White Card */}
        <div className="bg-white rounded-xl border border-[#E8E4DF] p-6 sm:p-10 shadow-xs relative">
          {formInner}
        </div>

      </div>
    </section>
  );
};
