import React, { useEffect, useState, useRef } from 'react';
import {
  X,
  ExternalLink,
  Github,
  Award,
  Layers,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Eye,
  Sliders,
  Check,
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Interactive Sandbox state for SatQuery AI
  const [satSpectralMode, setSatSpectralMode] = useState<'rgb' | 'ndvi' | 'thermal' | 'contours'>('rgb');
  const [satScanning, setSatScanning] = useState(false);

  // Interactive Sandbox state for Smart Assignment Portal
  const [submissionCode, setSubmissionCode] = useState(
    `def reverse_linked_list(head):\n    prev = None\n    current = head\n    while current:\n        next_node = current.next\n        current.next = prev\n        prev = current\n        current = next_node\n    return prev`
  );
  const [evalResult, setEvalResult] = useState<{
    status: 'idle' | 'evaluating' | 'completed';
    score: number;
    feedback: string;
    tests: { name: string; passed: boolean }[];
  }>({
    status: 'idle',
    score: 0,
    feedback: '',
    tests: [],
  });

  // Interactive Sandbox state for BMW Aesthetic Configurator
  const [bmwColor, setBmwColor] = useState<{ name: string; hex: string; desc: string }>({
    name: 'Individual Dravit Grey',
    hex: '#4A4C50',
    desc: 'Metallic pearl finish with warm amber undertones in direct sunlight.',
  });
  const [bmwWheel, setBmwWheel] = useState<'aero' | 'sport' | 'individual'>('aero');

  // Interactive Sandbox state for Ticket Booking Platform
  const [selectedStand, setSelectedStand] = useState<'cricket' | 'cinema'>('cricket');
  const [selectedSeats, setSelectedSeats] = useState<string[]>(['B14', 'B15']);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Interactive Sandbox state for 2D Graphics Editor Canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [graphicsAlgo, setGraphicsAlgo] = useState<'line' | 'circle' | 'clip'>('line');

  // Redraw canvas for 2D Graphics Editor
  useEffect(() => {
    if (!project || project.demoType !== 'graphics') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0F172A';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw coordinate grid
    ctx.strokeStyle = 'rgba(100, 116, 139, 0.2)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    if (graphicsAlgo === 'line') {
      // Simulate Bresenham's Line Algorithm
      ctx.strokeStyle = '#8A9A86';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(30, 40);
      ctx.lineTo(250, 160);
      ctx.stroke();

      ctx.fillStyle = '#FAF7F2';
      ctx.font = '10px monospace';
      ctx.fillText("Bresenham's Integer Line: (30,40) -> (250,160)", 15, 20);
      ctx.fillText('dx: 220, dy: 120, P_k decision variable active', 15, canvas.height - 15);
    } else if (graphicsAlgo === 'circle') {
      // Midpoint Circle Algorithm
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(150, 100, 60, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.fillStyle = '#FAF7F2';
      ctx.font = '10px monospace';
      ctx.fillText('Midpoint Circle Algorithm (Radius: 60px, Center: 150,100)', 15, 20);
      ctx.fillText('8-Way Symmetric Octant Computation', 15, canvas.height - 15);
    } else {
      // Sutherland-Hodgman Polygon Clipping
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.strokeRect(50, 40, 200, 120);

      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(70, 40);
      ctx.lineTo(230, 40);
      ctx.lineTo(250, 120);
      ctx.lineTo(150, 160);
      ctx.lineTo(50, 110);
      ctx.closePath();
      ctx.stroke();

      ctx.fillStyle = '#FAF7F2';
      ctx.font = '10px monospace';
      ctx.fillText('Sutherland-Hodgman Viewport Clipping Window', 15, 20);
      ctx.fillText('Resulting Clipped Convex Polygon Points', 15, canvas.height - 15);
    }
  }, [project, graphicsAlgo]);

  const handleSimulateEvaluation = () => {
    setEvalResult({ status: 'evaluating', score: 0, feedback: 'Executing unit assertions...', tests: [] });
    setTimeout(() => {
      setEvalResult({
        status: 'completed',
        score: 100,
        feedback: 'All 5 automated unit test vectors passed. Optimal asymptotic time complexity O(N).',
        tests: [
          { name: 'Base case (single element list)', passed: true },
          { name: 'Multi-node reversal symmetry', passed: true },
          { name: 'Null head edge condition', passed: true },
          { name: 'O(1) auxiliary space constraint', passed: true },
          { name: 'Deterministic memory cleanup', passed: true },
        ],
      });
    }, 600);
  };

  const handleSeatToggle = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatId));
    } else {
      if (selectedSeats.length >= 4) return;
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#0F172A]/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-2xl border border-[#E2DDD4] shadow-2xl overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2DDD4] bg-[#F4F1EA]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#8A9A86] font-semibold tracking-wider uppercase">
              {project.categoryLabel}
            </span>
            <span className="text-[#64748B]">·</span>
            <span className="text-xs font-mono text-[#64748B] tracking-wider uppercase">
              SYS-ID: {project.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#E9E6DF] transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Title & Recognition */}
          <div className="mb-6">
            {project.recognition && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9E6DF] border border-[#D8D2C6] text-xs font-mono text-[#1E293B] mb-3">
                <Award className="w-3.5 h-3.5 text-[#D97706]" />
                <span>{project.recognition}</span>
              </div>
            )}
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0F172A] font-medium tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-sans text-[#64748B] mt-1">
              {project.tagline}
            </p>
          </div>

          {/* High-Resolution Project Showcase Image */}
          <div className="rounded-xl overflow-hidden border border-[#E2DDD4] bg-[#E9E6DF] mb-8 relative shadow-sm aspect-[16/9] max-h-[380px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#F4F1EA] border border-[#E2DDD4] mb-8">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <span className="block text-xs font-mono text-[#64748B] uppercase tracking-wider mb-1">
                  {m.label}
                </span>
                <span className="font-serif text-lg sm:text-xl font-medium text-[#0F172A]">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Project Narrative */}
          <div className="mb-8">
            <h3 className="text-xs font-mono tracking-wider uppercase text-[#64748B] mb-2">
              System Overview & Problem Statement
            </h3>
            <p className="text-sm sm:text-base text-[#45474C] leading-relaxed mb-4">
              {project.fullDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-[#FAF7F2] border border-[#E2DDD4] text-[#1E293B]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* INTERACTIVE LIVE SANDBOX SIMULATOR */}
          <div className="rounded-xl p-5 bg-[#F4F1EA] border border-[#64748B]/30 mb-8">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2DDD4]">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#8A9A86]" />
                <h4 className="text-xs font-mono font-semibold tracking-wider uppercase text-[#0F172A]">
                  Interactive System Simulation Sandbox
                </h4>
              </div>
              <span className="text-[11px] font-mono text-[#8A9A86]">
                LIVE CLIENT-SIDE TESTBED
              </span>
            </div>

            {/* Sandbox 1: SatQuery AI Satellite Multispectral Switcher */}
            {project.demoType === 'satquery' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4]">
                    {(['rgb', 'ndvi', 'thermal', 'contours'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setSatSpectralMode(mode)}
                        className={`px-3 py-1 text-xs font-mono rounded transition-colors cursor-pointer ${
                          satSpectralMode === mode
                            ? 'bg-[#1E293B] text-[#FAF7F2]'
                            : 'text-[#64748B] hover:text-[#0F172A]'
                        }`}
                      >
                        {mode.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSatScanning(true);
                      setTimeout(() => setSatScanning(false), 900);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded bg-[#FAF7F2] border border-[#64748B]/30 text-[#1E293B] hover:bg-[#E9E6DF] cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${satScanning ? 'animate-spin' : ''}`} />
                    <span>Run Geo-Inference</span>
                  </button>
                </div>

                {/* Simulated Satellite Screen */}
                <div className="relative rounded-lg overflow-hidden border border-[#1E293B] bg-[#091426] p-4 text-[#FAF7F2] min-h-[180px]">
                  <div className="flex justify-between items-center text-[11px] font-mono text-[#8A9A86] mb-3">
                    <span>TELEMETRY: SENTINEL-4 OBS</span>
                    <span>LAT 12.9716° N // LON 77.5946° E</span>
                  </div>

                  {satSpectralMode === 'rgb' && (
                    <div className="text-xs space-y-2 font-mono text-slate-300">
                      <p className="text-emerald-400">● Optical RGB Layer: High-resolution surface imagery loaded.</p>
                      <p>Detected 3 Maritime Transport Vessels at coordinates (Block 7B).</p>
                      <p className="text-[#8A9A86]">Cloud cover index: 4.2% · Sun elevation angle: 48.3°</p>
                    </div>
                  )}

                  {satSpectralMode === 'ndvi' && (
                    <div className="text-xs space-y-2 font-mono text-emerald-300">
                      <p>● NDVI Normalized Difference Vegetation Index Active.</p>
                      <p className="text-amber-300">Vegetation density gradient: 0.72 (Healthy Canopy).</p>
                      <p>Near-infrared reflection calibrated against Sentinel-2 spectral bands.</p>
                    </div>
                  )}

                  {satSpectralMode === 'thermal' && (
                    <div className="text-xs space-y-2 font-mono text-amber-300">
                      <p className="text-rose-400">● Thermal Heatmap Array: Surface Temperature Readings.</p>
                      <p>Urban Heat Island differential: +3.8°C relative to coastal maritime baseline.</p>
                      <p>Sensor Calibration: Band 10/11 TIRS sensor integration verified.</p>
                    </div>
                  )}

                  {satSpectralMode === 'contours' && (
                    <div className="text-xs space-y-2 font-mono text-cyan-300">
                      <p>● Computer Vision Contour Detection & Polygon Vectorization.</p>
                      <p>Coastline shift delta: 1.2m erosion boundary tagged over 6-month historical overlay.</p>
                      <p className="text-emerald-400">Bounding Box confidence: 96.8% precision.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Sandbox 2: Smart Assignment Submission System Tester */}
            {project.demoType === 'assignment' && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#64748B] mb-1.5">
                    <span>Python Code Editor (Reverse Linked List)</span>
                    <span>Classroom: SCIT-DS-302</span>
                  </div>
                  <textarea
                    value={submissionCode}
                    onChange={(e) => setSubmissionCode(e.target.value)}
                    rows={5}
                    className="w-full font-mono text-xs p-3 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4] text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-[#1E293B]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={handleSimulateEvaluation}
                    disabled={evalResult.status === 'evaluating'}
                    className="px-4 py-2 text-xs font-mono font-medium rounded-lg bg-[#1E293B] text-[#FAF7F2] hover:bg-[#0F172A] cursor-pointer"
                  >
                    {evalResult.status === 'evaluating' ? 'Executing Test Harness...' : 'Submit & Auto-Evaluate'}
                  </button>
                  <span className="text-xs font-mono text-[#64748B]">
                    Status: {evalResult.status.toUpperCase()}
                  </span>
                </div>

                {evalResult.status === 'completed' && (
                  <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#8A9A86]/40 text-xs">
                    <div className="flex items-center justify-between font-mono text-sm font-semibold text-[#0F172A] mb-2">
                      <span className="flex items-center gap-1.5 text-emerald-700">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Grading Score: {evalResult.score} / 100</span>
                      </span>
                      <span className="text-xs text-[#8A9A86]">RLS Authenticated</span>
                    </div>
                    <p className="text-xs text-[#45474C] mb-2">{evalResult.feedback}</p>
                    <div className="space-y-1">
                      {evalResult.tests.map((t, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-emerald-800">
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span>{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Sandbox 3: BMW Aesthetic Showcase Configurator */}
            {project.demoType === 'bmw' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-mono text-[#64748B] block mb-1">Exterior Finish:</span>
                    <div className="flex items-center gap-2">
                      {[
                        { name: 'Alpine White', hex: '#EBEBEB', desc: 'Crisp high-gloss non-metallic pure white.' },
                        { name: 'Carbon Black', hex: '#1C2029', desc: 'Deep obsidian metallic with dark navy refraction.' },
                        { name: 'Isle of Man Green', hex: '#264E3F', desc: 'Rich emerald metallic inspired by legendary racing circuits.' },
                        { name: 'Individual Dravit Grey', hex: '#4A4C50', desc: 'Metallic pearl finish with warm amber undertones.' },
                      ].map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setBmwColor(c)}
                          title={c.name}
                          className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                            bmwColor.name === c.name ? 'scale-125 border-[#0F172A]' : 'border-white/80 hover:scale-110'
                          }`}
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-[#64748B] block mb-1">Aero Wheels:</span>
                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      {(['aero', 'sport', 'individual'] as const).map((w) => (
                        <button
                          key={w}
                          onClick={() => setBmwWheel(w)}
                          className={`px-2.5 py-1 rounded cursor-pointer ${
                            bmwWheel === w
                              ? 'bg-[#1E293B] text-[#FAF7F2]'
                              : 'bg-[#FAF7F2] text-[#64748B] hover:text-[#0F172A]'
                          }`}
                        >
                          {w.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4]">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-serif text-base font-medium text-[#0F172A]">
                      Selected: {bmwColor.name}
                    </span>
                    <span className="text-xs font-mono text-[#8A9A86]">601 HP · 0-60 in 3.7s</span>
                  </div>
                  <p className="text-xs text-[#64748B]">{bmwColor.desc}</p>
                </div>
              </div>
            )}

            {/* Sandbox 4: Ticket Booking Seat Selector */}
            {project.demoType === 'booking' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 p-1 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4]">
                    <button
                      onClick={() => setSelectedStand('cricket')}
                      className={`px-3 py-1 text-xs font-mono rounded cursor-pointer ${
                        selectedStand === 'cricket' ? 'bg-[#1E293B] text-[#FAF7F2]' : 'text-[#64748B]'
                      }`}
                    >
                      IPL STADIUM STAND
                    </button>
                    <button
                      onClick={() => setSelectedStand('cinema')}
                      className={`px-3 py-1 text-xs font-mono rounded cursor-pointer ${
                        selectedStand === 'cinema' ? 'bg-[#1E293B] text-[#FAF7F2]' : 'text-[#64748B]'
                      }`}
                    >
                      CINEMA IMAX SCREEN
                    </button>
                  </div>

                  <span className="text-xs font-mono text-[#64748B]">
                    Selected: {selectedSeats.length} seats
                  </span>
                </div>

                {/* Simulated Seat Grid */}
                <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4]">
                  <div className="text-center text-[10px] font-mono text-[#64748B] uppercase tracking-widest mb-3 pb-1 border-b border-[#E2DDD4]">
                    {selectedStand === 'cricket' ? 'STADIUM PITCH FOCUS' : 'IMAX CURVED SCREEN DIRECTION'}
                  </div>

                  <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 justify-items-center max-w-sm mx-auto">
                    {['A10', 'A11', 'A12', 'A13', 'B14', 'B15', 'B16', 'B17', 'C20', 'C21', 'C22', 'C23', 'D24', 'D25', 'D26', 'D27'].map((seat) => {
                      const isSelected = selectedSeats.includes(seat);
                      return (
                        <button
                          key={seat}
                          onClick={() => handleSeatToggle(seat)}
                          className={`w-9 h-7 rounded text-[10px] font-mono font-medium transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-700 text-white shadow-sm'
                              : 'bg-[#E9E6DF] text-[#1E293B] hover:bg-[#D8D2C6]'
                          }`}
                        >
                          {seat}
                        </button>
                      );
                    })}
                  </div>

                  {/* Summary Bar */}
                  <div className="mt-4 pt-3 border-t border-[#E2DDD4] flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[#64748B] font-mono">Estimated Total: </span>
                      <span className="font-semibold text-[#0F172A]">₹{selectedSeats.length * (selectedStand === 'cricket' ? 1200 : 380)}</span>
                    </div>

                    <button
                      onClick={() => setBookingConfirmed(true)}
                      className="px-3 py-1.5 rounded bg-[#1E293B] text-[#FAF7F2] text-xs font-mono hover:bg-[#0F172A] cursor-pointer"
                    >
                      {bookingConfirmed ? 'Pass Generated ✓' : 'Lock Seats & Issue Pass'}
                    </button>
                  </div>

                  {bookingConfirmed && (
                    <div className="mt-3 p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono">
                      ✓ Instant Pass issued for {selectedSeats.join(', ')} with QR encryption. Concurrency lock held for 10 minutes.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Sandbox 5: 2D Graphics Editor Canvas Algorithm Simulator */}
            {project.demoType === 'graphics' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4]">
                    {(['line', 'circle', 'clip'] as const).map((algo) => (
                      <button
                        key={algo}
                        onClick={() => setGraphicsAlgo(algo)}
                        className={`px-3 py-1 text-xs font-mono rounded cursor-pointer ${
                          graphicsAlgo === algo ? 'bg-[#1E293B] text-[#FAF7F2]' : 'text-[#64748B]'
                        }`}
                      >
                        {algo === 'line' ? 'Bresenham Line' : algo === 'circle' ? 'Midpoint Circle' : 'Sutherland Clipping'}
                      </button>
                    ))}
                  </div>

                  <span className="text-xs font-mono text-[#8A9A86]">ANSI C Engine Emulation</span>
                </div>

                <div className="flex justify-center bg-[#0F172A] p-2 rounded-lg border border-[#1E293B]">
                  <canvas ref={canvasRef} width={360} height={200} className="w-full max-w-[360px] h-auto rounded" />
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2DDD4]">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium text-[#FAF7F2] bg-[#1E293B] rounded-lg hover:bg-[#0F172A] transition-all cursor-pointer shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>Inspect Source on GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-[#64748B] hover:text-[#0F172A] cursor-pointer"
            >
              Close Window [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
