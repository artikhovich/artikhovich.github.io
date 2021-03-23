import React from 'react';
export default class SectionOne extends React.Component{
	render(){
		return(
			<section className="section-one">
				<h1>Приветcтвую вас! </h1>
                <blockquote className="col-lg-4 col-md-4 col-sm-4 col-xs-12" id="arang">
                    <div className="quote">
                    <h2 className='intro'>Аранжировка</h2>
                    <p className='more'>Суть аранжировки состоит в приведении в порядок изначальной идеи музыкальной темы. Если вы обращаетесь с просьбой аранжировать вашу музыкальную тему, то моя задача оформить ВАШУ тему учитывая ваши пожелания о составе инструментов, диапазоне участников ансамбля, продолжительности звучания будущего произведения и других тонкостей которые могут быть оговорены при заключении соглашения о сотрудничестве.</p>
                    </div>
                </blockquote>
    			<blockquote className="col-lg-4 col-md-4 col-sm-4 col-xs-12" id='vnimatel'>
                    <div className="quote">
                    <h2 className='intro'>Внимательность</h2>
                     <p className='more'>Вы можете указать строго темп будущего произведения, при этом сопровождаться ваше пожелание может записью на диктофон ваших импровизаций и комментариев.</p>
                    </div>
                </blockquote>
                <blockquote className="col-lg-4 col-md-4 col-sm-4 col-xs-12" id='sound'>
                    <div className="quote">
                    <h2 className='intro'>Своевременность</h2>
                     <p className='more'>По прошествии некоторого (не более оговариваемого с вами) времени, я вам предоставляю нотный материал и звуковой образец выполненный при помощи компьютера, где прозвучит аранжированная мною, предложенная вами тема. После этого события возможны корректировки некоторых параметров аранжировки. Все это оговаривается, корректируется и выполняется.</p>
                    </div>
                </blockquote>            				
			</section>
		)
	}
}