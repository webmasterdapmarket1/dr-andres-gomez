import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/siteConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-10 lg:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-medical-primary hover:text-medical-hover"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al Inicio</span>
        </Link>

        {/* Header */}
        <header className="space-y-4">
          <SectionHeading
            align="left"
            kicker="Normativa y Tratamiento de Información Personal"
            title="Política de Privacidad, Tratamiento de *datos* y secreto médico"
            subtitle="Cumplimiento estricto de la Ley Estatutaria 1581 de 2012, Decreto Reglamentario 1377 de 2013 y Código de Ética Médica de la República de Colombia."
          />
          <div className="p-4 rounded-xl bg-cream-50 border border-cream-300 text-xs text-graphite-muted flex items-center justify-between">
            <span>Última actualización: Noviembre de 2026</span>
            <span className="font-semibold text-medical-primary">Vigencia Activa</span>
          </div>
        </header>

        {/* Policy Document Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-cream-300 shadow-sm space-y-8 text-xs sm:text-sm text-graphite-body leading-relaxed">
          {/* Chapter 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-800">
              1. Identificación del Responsable del Tratamiento
            </h2>
            <p>
              El responsable del tratamiento de los datos personales recopilados a través de este sitio web es el <strong>Dr. Andrés Gómez</strong>, médico especialista en Cirugía Plástica, Estética y Reconstructiva, con consultorio principal ubicado en el{' '}
              <a
                href={siteConfig.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-medical-primary hover:underline"
              >
                Edificio Torre Zentai, Carrera 23 No. 124 – 87, Torre 1, Consultorio 805, Bogotá D.C., Colombia
              </a>
              .
            </p>
            <div className="p-3.5 rounded-xl bg-cream-50 border border-cream-200 text-xs space-y-1">
              <p>• <strong>Correo de Privacidad:</strong> privacidad@drandresgomez.com / contacto@drandresgomez.com</p>
              <p>• <strong>PBX:</strong> {siteConfig.contact.pbx.join(' • ')}</p>
              <p>• <strong>WhatsApp de Atención:</strong> {siteConfig.contact.whatsapp.displayPrimary}</p>
            </div>
          </section>

          {/* Chapter 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-800">
              2. Marco Normativo y Principios Rectores
            </h2>
            <p>
              Esta política se rige bajo la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013, la Ley 23 de 1981 (Código de Ética Médica) y la Resolución 1995 de 1999 sobre custodia de historias clínicas.
            </p>
            <p>
              El tratamiento de datos personales se guiará en todo momento por los principios de legalidad, finalidad, libertad, veracidad o calidad, transparencia, acceso y circulación restringida, seguridad y confidencialidad médica.
            </p>
          </section>

          {/* Chapter 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-800">
              3. Tratamiento Especial de Datos Sensibles de Salud
            </h2>
            <p>
              Se consideran <strong>datos sensibles</strong> aquellos que afectan la intimidad del titular o cuyo uso indebido puede generar discriminación, incluyendo el estado de salud presente, pasado o futuro, diagnósticos, antecedentes quirúrgicos, fotografías clínicas e información anatómica.
            </p>
            <p>
              De conformidad con el artículo 6 de la Ley 1581 de 2012, se informa al usuario que tiene derecho a abstenerse de responder preguntas sobre datos sensibles, excepto cuando sea estrictamente indispensable para la elaboración del diagnóstico y la prestación del servicio médico-asistencial solicitado.
            </p>
          </section>

          {/* Chapter 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-800">
              4. Finalidades del Tratamiento de Datos
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Gestión y agendamiento de citas médicas presenciales en Torre Zentai o teleconsultas virtuales guiadas.</li>
              <li>Apertura y custodia de la historia clínica digital o física conforme a la normativa del Ministerio de Salud y Protección Social.</li>
              <li>Envío de recomendaciones preoperatorias, indicaciones farmacológicas y seguimiento del protocolo de recuperación postquirúrgica.</li>
              <li>Respuestas a consultas, solicitudes y aclaraciones requeridas por el paciente a través de canales autorizados (web, correo, WhatsApp).</li>
              <li>Comunicaciones informativas sobre avances médicos, siempre que el usuario haya dado su consentimiento expreso y sin compartir jamás datos con terceros con fines comerciales.</li>
            </ul>
          </section>

          {/* Chapter 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-800">
              5. Fotografías Clínicas y Consentimiento Informado
            </h2>
            <p>
              Todas las fotografías de resultados (antes y después) exhibidas en este sitio web corresponden a pacientes reales que han suscrito voluntariamente un consentimiento informado específico para su difusión con fines educativos e ilustrativos.
            </p>
            <p>
              En ninguna circunstancia se publicarán fotografías de procedimientos genitales o de cirugía íntima en este sitio web público, garantizando de forma absoluta la dignidad y reserva del paciente.
            </p>
          </section>

          {/* Chapter 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-800">
              6. Derechos de los Titulares (Habeas Data)
            </h2>
            <p>Como titular de los datos personales, tienes derecho a:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Conocer, actualizar y rectificar tus datos personales frente al responsable.</li>
              <li>Solicitar prueba de la autorización otorgada para el tratamiento.</li>
              <li>Ser informado respecto del uso que se ha dado a tus datos personales.</li>
              <li>Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios constitucionales (salvo deber legal o contractual de mantener la historia clínica según la ley médica).</li>
              <li>Acceder en forma gratuita a tus datos personales que hayan sido objeto de tratamiento.</li>
            </ul>
          </section>

          {/* Chapter 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-800">
              7. Procedimiento para Ejercer los Derechos
            </h2>
            <p>
              El titular podrá ejercer sus derechos de consulta o reclamo enviando una solicitud formal a <strong>privacidad@drandresgomez.com</strong> con su nombre completo, documento de identidad y descripción de la consulta. La solicitud será respondida en un término máximo de diez (10) días hábiles para consultas y quince (15) días hábiles para reclamos.
            </p>
          </section>

          {/* Chapter 8 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-800">
              8. Seguridad de la Información y Secreto Profesional Médico
            </h2>
            <p>
              Toda la información médica y clínica reposa bajo estrictas medidas de seguridad técnica, humana y administrativa. Adicionalmente, el Dr. Andrés Gómez y todo su equipo de enfermería y asistencia médica se encuentran amparados por el deber de <strong>secreto profesional médico</strong> consagrado en el artículo 74 de la Constitución Política de Colombia.
            </p>
          </section>

          {/* Chapter 9 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-navy-800">
              9. Vigencia y Modificaciones
            </h2>
            <p>
              La presente política entra en vigor a partir del mes de noviembre de 2026. Cualquier modificación sustancial será informada a través del sitio web oficial www.drandresgomez.com con antelación a su puesta en práctica.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
