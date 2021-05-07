import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'DÚVIDAS FREQUENTES',
    paragraph: 'Aqui você pode tirar as principais dúvidas sobre o seguro veicular Bem Protege'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <span className="text-color-primary"> —  MEU VEÍCULO É ACEITO? </span> <br />
                    Aceitamos todos os tipos de veículos não importa o ano desde que contenham código Fipe. <br />
                    Motocicletas <br />
                    Carros <br />
                    Caminhões <br />
                    Pick-ups <br />
                    Vans <br />
                    Veículos Especiais <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <span className="text-color-primary"> — A TAXA DE ATIVAÇÃO É COBRADA TODOS OS ANOS? </span> <br />
                      Não.  
                      A taxa de ativação é cobrada uma única vez na inclusão do cadastro na Bem Protege, só será cobrado
                      novamente se o associado 
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <span className="text-color-primary"> — EM QUANTO TEMPO MEU VEICULO PASSA A ESTAR PROTEGIDO? </span> <br />
                      Depois que um consultor ou até mesmo você realizar a vistoria online do veículo que consiste em (fotografias, preencher e assinar os contratos e encaminhar a digitalização para uma das Regionais BEM PROTEGE que temos espalhadas em todo território nacional. Feito isso a cobertura passa a valer em até 24h. 
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    <span className="text-color-primary"> — O QUE É UMA PROTEÇÃO VEICULAR? </span> <br />
                    A proteção veicular é uma forma de proteger seu veículo sem um gasto elevado. Esse serviço tem sua cobertura financiada a partir de um rateio. Nesse sistema os associados dividem entre si os custos mensais dos eventos que ocorrem nesse período (roubos, furtos, colisões, entre outros).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;