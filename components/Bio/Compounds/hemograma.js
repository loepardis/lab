import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function Hemograma ({ onChange, register, value, values, pdf }) {
  return (
    <>
      <section>
        <h2>Hemograma</h2>
        <h3>Hemograma y Plaquetas</h3>

        <div>
          <section className='section'>
            <Input
              register={register}
              onChange={onChange}
              type='number'
              pdf={pdf}
              measure='/mm3'
              placeholder='Globulos Rojos...'
              name='hemograma.globulos_rojos'
              value={!values?.globulos_rojos ? value : values.globulos_rojos}
            >
              Globulos Rojos:
            </Input>

            <Input
              register={register}
              onChange={onChange}
              pdf={pdf}
              type='number'
              measure='/mm3'
              placeholder='Globulos Blancos...'
              name='hemograma.globulos_blancos'
              value={
                !values?.globulos_blancos ? value : values.globulos_blancos
              }
            >
              Globulos Blancos:
            </Input>

            <Input
              register={register}
              onChange={onChange}
              pdf={pdf}
              type='number'
              measure='/mm3'
              name='hemograma.plaquetas'
              value={!values?.plaquetas ? value : values.plaquetas}
              placeholder='Plaquetas...'
            >
              Plaquetas:
            </Input>

            <Input
              register={register}
              onChange={onChange}
              type='number'
              pdf={pdf}
              measure='g/dL'
              placeholder='Hemoglobina...'
              name='hemograma.hemoglobina'
              value={!values?.hemoglobina ? value : values.hemoglobina}
            >
              Hemoglobina:
            </Input>

            <Input
              register={register}
              onChange={onChange}
              type='number'
              pdf={pdf}
              measure='%'
              placeholder='Hematocrito...'
              name='hemograma.hematocrito'
              value={!values?.hematocrito ? value : values.hematocrito}
            >
              Hematocrito:
            </Input>
          </section>

          <h3>Indices Hematimétricos</h3>
          <section className='section'>
            <Input
              register={register}
              onChange={onChange}
              pdf={pdf}
              type='number'
              measure='fL'
              placeholder='V.C.M...'
              name='hemograma.v_c_m'
              value={!values?.v_c_m ? value : values.v_c_m}
            >
              V.C.M:
            </Input>

            <Input
              register={register}
              pdf={pdf}
              onChange={onChange}
              type='number'
              measure='PG.'
              name='hemograma.hb_c_m'
              value={!values?.hb_c_m ? value : values.hb_c_m}
              placeholder='hb.C.M...'
            >
              Hb.C.M:
            </Input>

            <Input
              register={register}
              onChange={onChange}
              type='number'
              pdf={pdf}
              measure='g/dL'
              name='hemograma.c_hb_c_m'
              value={!values?.c_hb_c_m ? value : values.c_hb_c_m}
              placeholder='C.Hb.C.M...'
            >
              C.Hb.C.M.:
            </Input>
          </section>

          <h3>Formula Leucocitaria</h3>
          <section className='section'>
            <Input
              register={register}
              onChange={onChange}
              pdf={pdf}
              name='hemograma.blastos'
              value={!values?.blastos ? value : values.blastos}
              type='number'
              measure='%'
              placeholder='blastos...'
            >
              Blastos
            </Input>

            <Input
              register={register}
              onChange={onChange}
              name='hemograma.promielocitos'
              value={!values?.promielocitos ? value : values.promielocitos}
              pdf={pdf}
              type='number'
              measure='%'
              placeholder='Promielocitos...'
            >
              Promielocitos
            </Input>

            <Input
              register={register}
              onChange={onChange}
              value={!values?.mielocitos ? value : values.mielocitos}
              pdf={pdf}
              name='hemograma.mielocitos'
              type='number'
              measure='%'
              placeholder='Mielocitos...'
            >
              Mielocitos
            </Input>

            <Input
              register={register}
              onChange={onChange}
              type='number'
              measure='%'
              pdf={pdf}
              placeholder='Metamielocitos...'
              value={!values?.metamielocitos ? value : values.metamielocitos}
              name='hemograma.metamielocitos'
            >
              Metamielocitos
            </Input>

            <Input
              register={register}
              onChange={onChange}
              type='number'
              measure='%'
              pdf={pdf}
              placeholder='Cayados...'
              value={!values?.cayados ? value : values.cayados}
              name='hemograma.cayados'
            >
              Cayados
            </Input>

            <Input
              register={register}
              onChange={onChange}
              type='number'
              pdf={pdf}
              measure='%'
              placeholder='Neutrófilos / Segmentados...'
              value={!values?.neutrofilos ? value : values.neutrofilos}
              name='hemograma.neutrofilos'
            >
              Neutrófilos / Segmentados
            </Input>

            <Input
              register={register}
              onChange={onChange}
              pdf={pdf}
              type='number'
              measure='%'
              placeholder='Linfocitos...'
              value={!values?.linfocitos ? value : values.linfocitos}
              name='hemograma.linfocitos'
            >
              Linfocitos:
            </Input>

            <Input
              register={register}
              onChange={onChange}
              pdf={pdf}
              type='number'
              measure='%'
              placeholder='Monocitos...'
              value={!values?.monocitos ? value : values.monocitos}
              name='hemograma.monocitos'
            >
              Monocitos:
            </Input>

            <Input
              register={register}
              onChange={onChange}
              pdf={pdf}
              type='number'
              measure='%'
              placeholder='Eosinófilos...'
              value={!values?.eosinofilos ? value : values.eosinofilos}
              name='hemograma.eosinofilos'
            >
              Eosinófilos:
            </Input>

            <Input
              register={register}
              onChange={onChange}
              pdf={pdf}
              type='number'
              measure='%'
              placeholder='Basófilos...'
              value={!values?.basofilos ? value : values.basofilos}
              name='hemograma.basofilos'
            >
              Basófilos:
            </Input>
          </section>

          <Remarks
            value={!values?.remarks ? value : values.remarks}
            name='hemograma.remarks'
            register={register}
            pdf={pdf}
          />
        </div>
        <style jsx>
          {`
            div {
              display: flex;
              flex-wrap: wrap;
            }
            .section {
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              justify-content: space-between;
            }
          `}
        </style>
      </section>
    </>
  )
}
